'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div>
      <h1>Oops... Something went wrong</h1>
      <pre>{error.message}</pre>
    </div>
  )
}
