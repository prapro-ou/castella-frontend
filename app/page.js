import UnreadMessageCount from "@/features/components/UnreadMessageCount";
export default function Home() {
  const unreadCount =10;
  return (

    <main>
      <UnreadMessageCount count={unreadCount} />
      <h2 class="text-blue-500">Hello World!!</h2>
      <p>
        LAページ

        <a href='/login' className='text-blue-600'>
          Loginページ
        </a>
      </p>
    </main>
  );
}
