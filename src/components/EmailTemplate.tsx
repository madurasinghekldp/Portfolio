// EmailTemplate.tsx
export function EmailTemplate({ message, email }: { message: string; email?: string }) {
  return (
    <>
      <p>{message}</p>
      <p>Contact back through email: {email}</p>
    </>
  );
}
