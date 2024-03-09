<script>

  import { Sidebar, Logo, UserCredentials } from "@/components/ui";
  import { Home, User, Search, ArrowRight } from "lucide-svelte";
</script>

<Sidebar.Root>
  <Sidebar.Logo>
    <Logo src="https://images.unsplash.com/photo-1606788075765-f5e80bdf8f7b?w=800&dpr=2&q=80" alt="Company Logo" />
  </Sidebar.Logo>
  <Sidebar.Nav>
    <Sidebar.Item>
      <Home />
      <span>Home</span>
    </Sidebar.Item>
    <Sidebar.Item>
      <User />
      <span>Profile</span>
    </Sidebar.Item>
    <Sidebar.Item>
      <Search />
      <span>Search</span>
    </Sidebar.Item>
    <Sidebar.Item>
      <ArrowRight />
      <span>Logout</span>
    </Sidebar.Item>
  </Sidebar.Nav>
  <Sidebar.Footer>
    <UserCredentials
      name="John Doe"
      email="john.doe@example.com"
      avatarSrc="https://images.unsplash.com/photo-1606788075765-f5e80bdf8f7b?w=800&dpr=2&q=80"
    />
  </Sidebar.Footer>
</Sidebar.Root>

<style>
  :global(.sidebar-logo img) {
    width: 100%;
    height: auto;
  }
</style>