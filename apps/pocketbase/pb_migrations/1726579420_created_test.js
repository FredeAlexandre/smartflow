/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: "mmvriq796wmknqe",
      created: "2024-09-17 13:23:40.059Z",
      updated: "2024-09-17 13:23:40.059Z",
      name: "test",
      type: "base",
      system: false,
      schema: [
        {
          system: false,
          id: "dlozl8dl",
          name: "field",
          type: "text",
          required: false,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: "",
          },
        },
      ],
      indexes: [],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("mmvriq796wmknqe");

    return dao.deleteCollection(collection);
  },
);
