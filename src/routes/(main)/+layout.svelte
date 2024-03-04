<script>
  import { goto } from "$app/navigation";
  import { getAuthContext } from "$components/context/auth";
  import MainLayout from "$components/layouts/MainLayout.svelte";

  const { isAuthenticated } = getAuthContext();

  if (!$isAuthenticated) {
    goto("/auth/login");
  }
</script>

<MainLayout>
  <slot />
</MainLayout>
