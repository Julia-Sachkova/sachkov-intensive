<template>
  <footer
    class="footer flex flex-row justify-between gap-4 py-6 px-10 max-[540px]:px-4 max-[540px]:flex-col"
  >
    <div class="flex flex-col gap-6 justify-between">
      <div class="flex flex-row items-center gap-2 max-[540px]:mx-auto">
        <img src="~/assets/icon/code.svg" alt="логотип." />
        <span class="text-white text-4xl">Sachkov Tech</span>
      </div>

      <ul class="flex-col items-center gap-3 hidden max-[540px]:flex">
        <li class="w-48">
          <a href="https://t.me/sachkov_blog" class="footer__btn">
            <span class="footer__btn-text">Telegram</span>
            <img src="~/assets/icon/tg.png" alt="телеграм." class="w-5" />
          </a>
        </li>
        <li class="w-48">
          <a href="https://www.youtube.com/@SachkovTech" class="footer__btn">
            <span class="footer__btn-text">YouTube</span>
            <img src="~/assets/icon/yt.png" alt="ютуб." class="w-5" />
          </a>
        </li>
      </ul>

      <ul
        class="text-lg text-slate-400 uppercase max-[540px]:text-base max-[540px]:text-center"
      >
        <li>ИП САЧКОВ КИРИЛЛ ОЛЕГОВИЧ</li>
        <li>ИНН: 771004514845</li>
        <li>ОГРНИП 324774600480938</li>
      </ul>

      <div class="flex flex-row gap-x-3 gap-y-2 flex-wrap max-[540px]:flex-col">
        <a
          href="https://disk.yandex.ru/i/WUe0UUVdkY2tSQ"
          class="text-lg text-slate-400 underline max-[540px]:text-base max-[540px]:text-center !leading-tight"
        >
          Оферта
        </a>
      </div>
    </div>

    <ul class="flex flex-col gap-6 max-[540px]:hidden">
      <li class="w-48">
        <a href="https://t.me/sachkov_blog" class="footer__btn">
          <span class="footer__btn-text">Telegram</span>
          <img src="~/assets/icon/tg.png" alt="телеграм." />
        </a>
      </li>
      <li class="w-48">
        <a href="https://www.youtube.com/@SachkovTech" class="footer__btn">
          <span class="footer__btn-text">YouTube</span>
          <img src="~/assets/icon/yt.png" alt="ютуб." />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.footer {
  border-radius: 24px;
  border: 1px solid #e59cff;
  background: rgba(10, 1, 25, 0.6);
}

.footer__btn {
  padding: 12px 20px;
  border-radius: 16px;
  border: 1px solid #e59cff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: box-shadow 0.2s ease-in-out;
  height: 52px;
}

.footer__btn:focus-visible {
  outline: none;
}

.footer__btn:hover {
  box-shadow: 0 0 15px #e59cff;
  transition: box-shadow 0.2s ease-in-out;
}

.footer__btn-text {
  background: linear-gradient(
    90deg,
    #e59cff 0.01%,
    #ba9cff 50.01%,
    #9cb2ff 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 1300px) {
  .footer {
    border-radius: 18px;
  }
}

@media screen and (max-width: 540px) {
  .footer {
    border-radius: 12px;
    box-shadow: none;
  }

  .footer__btn {
    padding: 12px 16px;
    border-radius: 12px;
    gap: 4px;
    height: 43px;
  }

  .footer__btn:hover {
    box-shadow: 0 0 8px #e59cff;
  }
}
</style>
