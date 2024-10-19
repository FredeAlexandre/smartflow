import { z } from "zod";

///
/// JsonLidity Version 0
/// This version should only be able to create simple contracts standalone
/// without external calls to librairies and contracts dependencies
///

// !TODO Make this a enum with right values for compiler versions
export const SolidityCompilerVersion = z.string();

// !TODO Make a validator for string in code so basicaly ascii with no spaces and weird symbol as %$^& etc
export const AsciiString = z.string();

// !TODO Make an enum of valid types in solidity
export const SolidityVariableType = z.string();

// !TODO Make an enum of solidity visibilities
export const SolidityVisibilty = z.string();

export const SolidityFunctionStatement = z.object({});

export const JsonLidityContractSchema = z.object({
  name: AsciiString,
  storage: z
    .array(
      z.object({
        name: AsciiString,
        type: SolidityVariableType,
        visibility: SolidityVisibilty,
      }),
    )
    .refine(refineArrayNoDuplicateFor("name"), {
      message: "Two variables name can't have the same name",
    }),
  events: z
    .array(
      z.object({
        name: AsciiString,
        arguments: z.array(
          z.object({
            name: AsciiString,
            type: SolidityVariableType,
          }),
        ),
      }),
    )
    .refine(refineArrayNoDuplicateFor("name"), {
      message: "Two events can't have the same name",
    }),
  functions: z
    .array(
      z.object({
        name: AsciiString,
        visibility: SolidityVisibilty,
        statements: SolidityFunctionStatement,
      }),
    )
    .refine(refineArrayNoDuplicateFor("name"), {
      message: "Two functions can't have the same name",
    }),
});

export type JsonLidityContractSchemaType = z.infer<typeof JsonLidityContractSchema>

export const JsonLiditySchema = z.object({
  compiler_version: SolidityCompilerVersion,
  contracts: z
    .array(JsonLidityContractSchema)
    .refine(refineArrayNoDuplicateFor("name"), {
      message: "Two contracts can't have the same name",
    }),
});

export type JsonLiditySchemaType = z.infer<typeof JsonLiditySchema>

function refineArrayNoDuplicateFor<T extends object>(key: keyof T) {
  return (arr: T[]) => {
    const names = new Set();

    for (const value of arr) {
      if (names.has(value[key])) {
        return false;
      }
      names.add(value[key]);
    }

    return true;
  };
}
