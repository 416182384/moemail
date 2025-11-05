// 新 app/fonts.ts 内容
import { Noto_Sans_SC } from 'next/font/google';

// 加载 Noto Sans SC（替换成你想要的字体）
export const customFont = Noto_Sans_SC({
  subsets: ['latin'], // 按需加载子集（中文需加 'chinese-simplified'）
  weight: ['400', '500', '700'], // 所需字重
  variable: '--font-custom', // 自定义 CSS 变量名
  display: 'swap',
});
