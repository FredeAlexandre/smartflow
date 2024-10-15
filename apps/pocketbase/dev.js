const { execSync } = require("node:child_process");

const DOCKER_IMAGE_NAME = "pocketbase";
const DOCKER_DATA_VOLUME_NAME = "pb_data";

const commands = {
  START_CONTAINER: `docker run -it --rm -v ${DOCKER_DATA_VOLUME_NAME}:/pb/pb_data -v ./pb_migrations:/pb/pb_migrations -v ./pb_hooks:/pb/pb_hooks -p 8080:8080 ${DOCKER_IMAGE_NAME}`,
  BUILD_IMAGE: `docker build -t ${DOCKER_IMAGE_NAME} .`,
  DELETE_IMAGE: `docker rmi ${DOCKER_IMAGE_NAME}`,
  DOES_IMAGE_EXIST: `docker image inspect ${DOCKER_IMAGE_NAME}`,
  CREATE_VOLUME: `docker volume create ${DOCKER_DATA_VOLUME_NAME}`,
  DOES_VOLUME_EXIST: `docker volume inspect ${DOCKER_DATA_VOLUME_NAME}`,
};

// Fonction pour exécuter une commande shell
function runCommand(command) {
  try {
    return execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
}

// Verifier si Docker est lancer
function isDockerRunning() {
  try {
    execSync("docker ps", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// Vérifier si l'image "pocketbase" existe
function doesImageExist() {
  try {
    execSync(commands.DOES_IMAGE_EXIST, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// Vérifier si le volume "pb_data" existe
function doesVolumeExist() {
  try {
    execSync(commands.DOES_VOLUME_EXIST, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Running PocketBase...");
if (!isDockerRunning()) {
  console.error("Docker is not running, please start Docker first.");
  process.exit(1);
}

// Si le volume n'existe pas, on le crée
if (!doesVolumeExist()) {
  console.log("Volume pb_data does not exist, creating volume...");
  runCommand(commands.CREATE_VOLUME);
} else {
  console.log("Volume pb_data exists, skipping volume creation.");
}

// Si l'image existe, on lance le container, sinon on la build d'abord
if (doesImageExist()) {
  console.log("Image pocketbase exists, deleting...");
  runCommand(commands.DELETE_IMAGE)
}

console.log("Building image...");
runCommand(commands.BUILD_IMAGE);
console.log("Image built successfully, starting container...");
runCommand(commands.START_CONTAINER);

// On process exit delete the image
process.on("exit", () => {
  console.log("Deleting image...");
  runCommand(commands.DELETE_IMAGE);
});
