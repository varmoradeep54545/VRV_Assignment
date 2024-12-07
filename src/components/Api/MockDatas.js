export const users = [
  {
    userId: 1,
    name: "Deep",
    email: "Deep@gmail.com",
    role: "Admin",
    status: "Active",
    created: "12/6/2024",
    image: "",
  },
  {
    userId: 2,
    name: "Sagar",
    email: "Sagar@gmail.com",
    role: "User",
    status: "Inactive",
    created: "11/6/2024",
    image: "",
  },
  {
    userId: 3,
    name: "akhil",
    email: "akhil@gmail.com",
    role: "User",
    status: "Active",
    created: "09/11/2024",
    image: "",
  },

  {
    userId: 4,
    name: "Rajan",
    email: "Rajan@gmail.com",
    role: "Manager",
    status: "Inactive",
    created: "10/11/2024",
    image: "",
  },
];

export const roles = [
  {
    Id: 1,
    rolename: "Admin",
    description:
      "Has full access to all resources and can manage all users and data.",
    permissions: {
      read: true,
      write: true,
      delete: true,
      manageRoles: true,
      viewAnalytics: true,
    },
  },
  {
    Id: 2,
    rolename: "Manager",
    description:
      "Can manage users, assign roles, and view reports, but cannot delete data.",
    permissions: {
      read: true,
      write: true,
      delete: false,
      manageRoles: false,
      viewAnalytics: true,
    },
  },
  {
    Id: 3,
    rolename: "User",
    description:
      "Can read and write their own data, but cannot modify others' data.",
    permissions: {
      read: true,
      write: false,
      delete: false,
      manageRoles: false,
      viewAnalytics: true,
    },
  },
];

export const permissions = [
  {
    id: 1,
    permission: "Read",
    description: "Allows reading of data",
  },
  {
    id: 2,
    permission: "Write",
    description: "Allows writing of data",
  },
  {
    id: 3,
    permission: "Delete",
    description: "Allows delete of operations",
  },
  {
    id: 4,
    permission: "Manageroles",
    description: "Allows manageroles of operations",
  },
  {
    id: 5,
    permission: "Viewanalytics",
    description: "Allows viewanalytics of operations",
  },
];
