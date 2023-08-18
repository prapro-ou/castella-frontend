export default function Login() {
  return (
    <main>
      <p>
        Loginページ
        <a href='/talks' className='text-primary'>
          Login
        </a>
      </p>
      <form method="POST" action=""> 
        <div>
          <label for="email">メールアドレス</label>
          <input className="ring-2" type="mail" id="emial" name="email" />
        </div>
        <div>
          <label for="password">パスワード</label>
          <input className="ring-2" type="password" id="password" name="password"/>
        </div>
        <button className = "bg-thin">送信</button>
      </form>
    </main>
  );
}
