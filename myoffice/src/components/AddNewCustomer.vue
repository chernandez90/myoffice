<template>
  <div>
    <div class="w-full text-center">
      <label class="text-3xl">Register Customer</label>
    </div>
    <div class="pl-20 pt-10 pb-5">
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>First Name</label>
        </div>
        <div class="w-1/2">
          <input type="text" class="border border-solid w-36" />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>Middle Name</label>
        </div>
        <div class="w-1/2">
          <input type="text" class="border border-solid w-36" />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>Last Name</label>
        </div>
        <div class="w-1/2">
          <input type="text" class="border border-solid w-36" />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>DOB</label>
        </div>
        <div class="w-1/2">
          <input type="date" class="border border-solid w-36" />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>Address</label>
        </div>
        <div class="w-1/2">
          <input type="text" class="border border-solid w-48" />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>Address2</label>
        </div>
        <div class="w-1/2">
          <input type="text" class="border border-solid w-48" />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>State</label>
        </div>
        <div class="w-1/2">
          <input type="text" class="border border-solid w-48" />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>Zip</label>
        </div>
        <div class="w-1/2">
          <input type="text" class="border border-solid w-48" />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>Email</label>
        </div>
        <div class="w-1/2">
          <input type="email" class="border border-solid w-48" />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>Phone</label>
        </div>
        <div class="w-1/2">
          <input
            type="tel"
            class="border border-solid w-48"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
      </div>
      <br />
      <div class="w-96 flex">
        <div class="w-1/2">
          <label>Sex</label>
        </div>
        <div class="w-1/2">
          <input type="text" class="border border-solid w-36" />
        </div>
      </div>
      <br />
      <div class="text-right w-full pr-10">
        <input type="submit" class="border border-solid bg-gray-400 rounded-md" value="Submit" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddNewCustomer'
}
</script>
