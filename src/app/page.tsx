"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// 导航菜单项
const navItems = [
  { id: "profile", label: "作品紹介", labelEn: "Profile" },
  { id: "works", label: "お知らせ", labelEn: "Works" },
  { id: "news", label: "あとがき", labelEn: "News" },
  { id: "contact", label: "てがみ", labelEn: "Contact" },
];

// 分类
const categories = ["単行本", "文庫本", "その他", "海外出版"];

// Mock 数据：收藏品集合
const myCollection = [
  {
    id: 1,
    year: "2024",
    title: "食堂巡礼",
    category: "単行本",
    author: "エッセイ集",
    publisher: "白泉社",
    detail: "1500円（税別）",
    img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    year: "2024",
    title: "春夏秋冬を味わうシンプルな暮らし",
    category: "単行本",
    author: "別冊天然生活",
    publisher: "扶桑社",
    detail: "定価1400円（税別）",
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    year: "2024",
    title: "小鳥とリムジン",
    category: "文庫本",
    author: "小説",
    publisher: "ポプラ社",
    detail: "定価1,700円（税別）",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    year: "2023",
    title: "余屋",
    category: "その他",
    author: "エッセイ集",
    publisher: "白泉社",
    detail: "定価1400円（税別）",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    year: "2023",
    title: "ツバキ文具店",
    category: "文庫本",
    author: "小説",
    publisher: "幻冬舎文庫",
    detail: "定価660円（税別）",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    year: "2022",
    title: "針と糸",
    category: "単行本",
    author: "小説",
    publisher: "毎日新聞出版",
    detail: "定価1,650円（税別）",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    year: "2022",
    title: "ライオンのおやつ",
    category: "文庫本",
    author: "小説",
    publisher: "ポプラ文庫",
    detail: "定価770円（税別）",
    img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    year: "2021",
    title: "キラキラ共和国",
    category: "その他",
    author: "エッセイ集",
    publisher: "幻冬舎",
    detail: "定価1,430円（税別）",
    img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    year: "2021",
    title: "ミ・ト・ン",
    category: "単行本",
    author: "小説",
    publisher: "集英社",
    detail: "定価1,540円（税別）",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 10,
    year: "2020",
    title: "暮らしの図鑑",
    category: "海外出版",
    author: "ライフスタイル",
    publisher: "翔泳社",
    detail: "定価1,980円（税別）",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 11,
    year: "2020",
    title: "あつあつを召し上がれ",
    category: "文庫本",
    author: "小説",
    publisher: "中央公論新社",
    detail: "定価660円（税別）",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 12,
    year: "2019",
    title: "暮らしの手帖",
    category: "その他",
    author: "雑誌",
    publisher: "暮らしの手帖社",
    detail: "定価1,100円（税別）",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState("works");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 筛选逻辑
  const filteredCollection = selectedCategory
    ? myCollection.filter((item) => item.category === selectedCategory)
    : myCollection;

  return (
    <div className="flex min-h-screen bg-[#fdfcf8] text-[#333]">
      {/* 左侧固定导航 - 日系极简风格 */}
      <nav className="fixed left-0 top-0 h-full w-32 lg:w-40 xl:w-48 px-6 lg:px-8 xl:px-12 py-16 lg:py-20 hidden md:flex flex-col border-r border-[#e5e0d5]">
        <ul className="space-y-8 lg:space-y-10">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              className={`nav-item cursor-pointer text-[11px] lg:text-xs tracking-[0.2em] font-light ${
                activeNav === item.id ? "active opacity-100" : "opacity-40"
              }`}
              onClick={() => setActiveNav(item.id)}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-1">
                <span className="text-[9px] lg:text-[10px] text-gray-400">
                  {item.labelEn}
                </span>
                <span>{item.label}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* 主内容区 */}
      <main className="flex-1 md:ml-32 lg:ml-40 xl:ml-48 px-6 md:px-10 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-14">
        {/* 顶部 Logo 区域 - 优雅的衬线体 */}
        <motion.div
          className="flex flex-col items-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="serif-title text-2xl md:text-3xl lg:text-4xl mb-2 lg:mb-3 font-normal">
            小通信
          </h1>
          <div className="w-12 lg:w-16 h-[0.5px] bg-[#e5e0d5] mb-2 lg:mb-3"></div>
          <p className="text-[9px] lg:text-[10px] tracking-[0.3em] lg:tracking-[0.4em] text-gray-400 uppercase font-light">
            OGAWA ITO OFFICIAL SITE
          </p>
        </motion.div>

        {/* 分类导航 */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 lg:gap-6 xl:gap-8 mb-8 lg:mb-10 pb-4 lg:pb-5 divider-elegant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              className={`text-[11px] lg:text-xs tracking-[0.15em] lg:tracking-[0.2em] font-light transition-all duration-500 relative ${
                selectedCategory === cat
                  ? "opacity-100 font-normal"
                  : "opacity-40 hover:opacity-70"
              }`}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? null : cat)
              }
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: selectedCategory === cat ? 1 : 0.4, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ opacity: 1 }}
            >
              {cat}
              {selectedCategory === cat && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[0.5px] bg-[#333]"
                  layoutId="categoryUnderline"
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* 收藏品网格 - 书籍封面比例 3:4，更紧凑的布局 */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-3 md:gap-x-4 lg:gap-x-4 gap-y-5 lg:gap-y-6">
          {filteredCollection.map((item, index) => (
            <motion.div
              key={item.id}
              className="card-wrapper flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.05,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -3 }}
            >
              {/* 封面图片 - 3:4 比例 */}
              <div className="aspect-[3/4] overflow-hidden bg-[#f5f3ed] mb-2.5 shadow-elegant shadow-elegant-hover">
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-image w-full h-full object-cover grayscale-[0.5] hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              {/* 作品信息 */}
              <div className="space-y-0.5 lg:space-y-1">
                <span className="text-[8px] lg:text-[9px] text-gray-400 block tracking-wider">
                  {item.year}
                </span>
                <h2 className="text-[10px] lg:text-xs font-normal tracking-wide serif-title leading-relaxed line-clamp-2">
                  「{item.title}」
                </h2>
                <p className="text-[9px] lg:text-[10px] text-gray-500 font-light line-clamp-1">
                  {item.author}
                </p>
                <p className="text-[9px] lg:text-[10px] text-gray-500 font-light line-clamp-1">
                  {item.publisher}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部装饰 */}
        <motion.footer
          className="mt-16 lg:mt-20 pt-6 lg:pt-8 divider-elegant flex flex-col items-center space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="w-8 h-8 opacity-20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div className="text-[9px] lg:text-[10px] text-gray-300 tracking-[0.4em] lg:tracking-[0.5em] font-light">
            © ITO OGAWA ALL RIGHTS RESERVED
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
