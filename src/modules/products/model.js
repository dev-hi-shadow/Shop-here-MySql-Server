const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

class Products extends Model {
  static associate(db) {
    Products.belongsTo(db.Brands, {
      as: "brands",
      foreignKey: "brand_id",
    });
    Products.belongsTo(db.Categories, {
      as: "categories",
      foreignKey: "category_id",
    });
    Products.belongsTo(db.SubCategories, {
      as: "sub_categories",
      foreignKey: "sub_category_id",
    });
    Products.belongsTo(db.Users, {
      foreignKey: "created_by",
    });
    Products.belongsTo(db.Users, {
      foreignKey: "updated_by",
    });
    Products.belongsTo(db.Users, {
      foreignKey: "seller_id",
      as: "seller",
    });
    Products.belongsTo(db.Units, {
      foreignKey: "unit_id",
      as: "unit",
    });
    Products.belongsTo(db.Taxes, {
      foreignKey: "tax_id",
      as: "tax",
    });
    Products.hasMany(db.PrStockIn, {
       foreignKey: "product_id",
    });
    Products.hasMany(db.Orders, {
       foreignKey: "product_id",
    });
    Products.hasMany(db.Faqs, {
       foreignKey: "product_id",
    });
    Products.hasMany(db.PrVariations, {
       foreignKey: "product_id",
    });
    Products.hasMany(db.PrStockOut, {
       foreignKey: "product_id",
    });
    
    Products.hasMany(db.OrItems, {
       foreignKey: "product_id",
    });
    
  }
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    product_type: {
      type: DataTypes.ENUM("Physical", "Digital"),
      allowNull: false,
    },
    made_in: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    assembled_in: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    max_order_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    min_order_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    quantity_step_size: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    warranty_period: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    guaranty_period: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    is_tax_included: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    main_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_cod_available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    main_video: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "brands",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
    sub_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "sub_categories",
        key: "id",
      },
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "units",
        key: "id",
      },
    },
    tax_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "taxes",
        key: "id",
      },
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    product_system_status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pending",
    },
    cancellable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    cancellable_till: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    replaceable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    replaceable_till: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    returnable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    returnable_till: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    refundable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    refundable_till: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "products",
    modelName: "Products",
  }
);

module.exports = Products;
