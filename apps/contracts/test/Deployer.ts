import {
    loadFixture,
    time,
  } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
  import { expect } from "chai";
  import hre from "hardhat";
  import { getAddress, parseGwei } from "viem";
  
  describe("Deployer contract", () => {
    async function deployDeployerContractFixture() {
      const [owner, addr1, addr2] = await hre.viem.getWalletClients();
  
      // Déployer le contrat Deployer avec le premier compte
      const deployer = await hre.viem.deployContract("Deployer", [], {
        client: { wallet: owner },
      });
  
      const publicClient = await hre.viem.getPublicClient();
  
      return {
        deployer,
        owner,
        addr1,
        addr2,
        publicClient,
      };
    }
  
    describe("Deployment", () => {
      it("Should set the right owner", async () => {
        const { deployer, owner } = await loadFixture(deployDeployerContractFixture);
  
        // Vérifier que le propriétaire du contrat est correct
        expect(await deployer.read.owner()).to.equal(
          getAddress(owner.account.address),
        );
      });
    });
  
    describe("Authorization", () => {
      it("Should allow the owner to authorize an address", async () => {
        const { deployer, addr1 } = await loadFixture(deployDeployerContractFixture);
  
        await deployer.write.authorize([addr1.account.address]);
  
        // Vérifier que addr1 est bien autorisé
        expect(await deployer.read.authorized([addr1.account.address])).to.be.true;
      });
  
      it("Should allow the owner to revoke authorization", async () => {
        const { deployer, addr1 } = await loadFixture(deployDeployerContractFixture);
  
        await deployer.write.authorize([addr1.account.address]);
        expect(await deployer.read.authorized([addr1.account.address])).to.be.true;
  
        await deployer.write.revokeAuthorization([addr1.account.address]);
        expect(await deployer.read.authorized([addr1.account.address])).to.be.false;
      });
  
      it("Should not allow non-owner to authorize", async () => {
        const { deployer, addr1, addr2 } = await loadFixture(deployDeployerContractFixture);
  
        // addr1 essaie d'autoriser addr2
        await expect(
          deployer.connect({ client: { wallet: addr1 } }).write.authorize([addr2.account.address]),
        ).to.be.rejectedWith("Not authorized");
      });
    });
  
    describe("Deployment by authorized address", () => {
      it("Should allow an authorized address to deploy a contract", async () => {
        const { deployer, addr1, publicClient } = await loadFixture(
          deployDeployerContractFixture,
        );
  
        // Autoriser addr1 à déployer
        await deployer.write.authorize([addr1.account.address]);
  
        // Bytecode d'un contrat minimal
        const bytecode =
          "0x6080604052348015600f57600080fd5b5060a08061001d6000396000f3fe60806040526004361060495760003560e01c806369fe0e2d14604e575b600080fd5b605460048036036020811015606257600080fd5b50356074565b005b67016345785d8a000081565b600080fd5b67016345785d8a00008256fea2646970667358221220a2a4023f32a23cf5fc07203e4384492de8b1ff7b6229f89f9117bb2deff7841664736f6c63430008070033";
  
        // Déployer le contrat via addr1
        const tx = await deployer.connect({ client: { wallet: addr1 } }).write.deploy(bytecode);
        const receipt = await publicClient.waitForTransactionReceipt({ hash: tx });
  
        // Vérifier que l'événement "ContractDeployed" a bien été émis avec une adresse valide
        const deployedAddress = receipt.logs[0].address;
        expect(deployedAddress).to.not.equal(ethers.constants.AddressZero);
      });
  
      it("Should not allow a non-authorized address to deploy a contract", async () => {
        const { deployer, addr2 } = await loadFixture(deployDeployerContractFixture);
  
        // Bytecode d'un contrat minimal
        const bytecode =
          "0x6080604052348015600f57600080fd5b5060a08061001d6000396000f3fe60806040526004361060495760003560e01c806369fe0e2d14604e575b600080fd5b605460048036036020811015606257600080fd5b50356074565b005b67016345785d8a000081565b600080fd5b67016345785d8a00008256fea2646970667358221220a2a4023f32a23cf5fc07203e4384492de8b1ff7b6229f89f9117bb2deff7841664736f6c63430008070033";
  
        // addr2 essaie de déployer (sans autorisation)
        await expect(
          deployer.connect({ client: { wallet: addr2 } }).write.deploy(bytecode),
        ).to.be.rejectedWith("Unauthorized deployer");
      });
    });
  });
  