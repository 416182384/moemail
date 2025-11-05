// app/fonts.ts 备选方案（系统字体）
import { Inter } from 'next/font/google'; // 保留Next.js默认的英文字体（避免英文显示异常）

// 英文字体（按需保留，不影响中文）
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// 中文系统字体（直接定义变量，不加载外部文件）
export const customFont = {
  variable: '--font-custom',
  className: '', // 空类名，仅用变量关联Tailwind
};
