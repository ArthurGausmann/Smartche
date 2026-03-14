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
    }
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
    }
  }
]