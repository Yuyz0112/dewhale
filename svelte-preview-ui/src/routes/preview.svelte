<script>

  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";

  let currentInput = "";
  let result = "";

  const handleInput = (value) => {
    currentInput += value;
  };

  const calculateResult = () => {
    try {
      result = eval(currentInput);
    } catch (e) {
      result = "Error";
    }
  };

  const clearInput = () => {
    currentInput = "";
    result = "";
  };
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <div class="bg-white shadow rounded-lg p-6 w-full max-w-md">
    <div class="mb-4">
      <Input class="w-full text-right p-2 text-lg border-2 border-gray-200 rounded" readOnly value={currentInput || result} />
    </div>
    <div class="grid grid-cols-4 gap-4">
      <Button variant="outline" on:click={() => handleInput('1')}>1</Button>
      <Button variant="outline" on:click={() => handleInput('2')}>2</Button>
      <Button variant="outline" on:click={() => handleInput('3')}>3</Button>
      <Button variant="outline" on:click={() => handleInput('+')}>+</Button>
      <Button variant="outline" on:click={() => handleInput('4')}>4</Button>
      <Button variant="outline" on:click={() => handleInput('5')}>5</Button>
      <Button variant="outline" on:click={() => handleInput('6')}>6</Button>
      <Button variant="outline" on:click={() => handleInput('-')}>-</Button>
      <Button variant="outline" on:click={() => handleInput('7')}>7</Button>
      <Button variant="outline" on:click={() => handleInput('8')}>8</Button>
      <Button variant="outline" on:click={() => handleInput('9')}>9</Button>
      <Button variant="outline" on:click={() => handleInput('*')}>*</Button>
      <Button variant="outline" on:click={() => handleInput('0')}>0</Button>
      <!-- Modified button with red color -->
      <Button class="bg-red-500 text-white" on:click={clearInput}>C</Button>
      <Button variant="outline" on:click={calculateResult}>=</Button>
      <Button variant="outline" on:click={() => handleInput('/')}>/</Button>
    </div>
  </div>
</div>

<style>
  /* Additional styles if needed */
</style>