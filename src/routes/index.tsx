import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1 class='from-stone-700'>Welcome to Qwik Docs Starter</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Docs Starter',
};
