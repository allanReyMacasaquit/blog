<script>
  import {
    createFormStore,
    emailValidator,
    fullNameValidator,
    maxLengthValidator,
    passwordValidator,
    usernameValidator
  } from "$stores/formHandlerStore";
  import FormError from "./FormError.svelte";

  const { validate, form, errors } = createFormStore({
    fullName: "",
    nickName: "",
    email: "",
    avatar: "",
    password: ""
  });

  function submitForm() {
    alert(JSON.stringify($form));
  }
</script>

<form class="flex-it">
  <div class="flex-it overflow-hidden sm:rounded-md">
    <div class="flex-it">
      <div class="flex-it">
        <div class="flex-it py-2">
          <label for="fullName" class="block text-sm font-medium text-gray-700"> Full Name </label>
          <input
            use:validate={[maxLengthValidator, fullNameValidator]}
            bind:value={$form.fullName}
            type="text"
            name="fullName"
            id="fullName"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <FormError errors={$errors.fullName} />
        </div>

        <div class="flex-it py-2">
          <label for="nickName" class="block text-sm font-medium text-gray-700"> Username </label>
          <input
            use:validate={[maxLengthValidator, usernameValidator]}
            bind:value={$form.nickName}
            type="text"
            name="nickName"
            id="nickName"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <FormError errors={$errors.nickName} />
        </div>

        <div class="flex-it py-2">
          <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
          <input
            use:validate={[emailValidator]}
            bind:value={$form.email}
            type="text"
            name="email"
            id="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <FormError errors={$errors.email} />
        </div>

        <div class="flex-it py-2">
          <label for="avatar" class="block text-sm font-medium text-gray-700"> Avatar </label>
          <input
            use:validate
            bind:value={$form.avatar}
            type="text"
            name="avatar"
            id="avatar"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div class="flex-it py-2">
          <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
          <input
            use:validate={[passwordValidator]}
            bind:value={$form.password}
            type="password"
            name="password"
            id="password"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <FormError errors={$errors.password} />
        </div>
      </div>
    </div>
    <div class="text-sm text-gray-600 pb-4">
      Already Registered?{" "}
      <a class="hover:underline" href="/auth/login"> Go to Login </a>
    </div>
    <div class="flex-it py-2">
      <button
        on:click={submitForm}
        type="button"
        class="
              bg-blue-400 hover:bg-blue-500 focus:ring-0
              disabled:cursor-not-allowed disabled:bg-gray-400
              inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2"
      >
        Register
      </button>
    </div>
  </div>
</form>
