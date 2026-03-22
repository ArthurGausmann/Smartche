export const usersMock = [
  {
    id: 1,
    name: "Arthur",
    email: "arthur@email.com",
    password_hash: "mock",
    platform_role: "ADMIN",
    is_active: true,
    tenant: {
      tenant_id: 1,
      tenant_role: "MANAGER"
    },
    dashboard_ids: [1, 2]
  },
  {
    id: 2,
    name: "João",
    email: "joao@email.com",
    password_hash: "mock",
    platform_role: "STANDARD",
    is_active: true,
    tenant: {
      tenant_id: 1,
      tenant_role: "USER"
    },
    dashboard_ids: [1]
  },
  {
    id: 3,
    name: "Felipe",
    email: "felipe@email.com",
    password_hash: "mock",
    platform_role: "ADMIN",
    is_active: true,
    tenant: {
      tenant_id: 2,
      tenant_role: "MANAGER"
    },
    dashboard_ids: [3]
  },
  {
    id: 4,
    name: "Carlos",
    email: "carlos@email.com",
    password_hash: "mock",
    platform_role: "STANDARD",
    is_active: true,
    tenant: {
      tenant_id: 2,
      tenant_role: "USER"
    },
    dashboard_ids: [3]
  },
]