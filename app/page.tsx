import { type Metadata } from 'next';

import { SocialBadge } from '@/components/social-badge';

import { Project } from '@/components/project';
import { Section } from '@/components/section';
import { Work } from '@/components/work';
import { profile } from './profile';

export const metadata: Metadata = {
  title: '桂江亨 - 个人简历',
};

export default function Home() {
  return (
    <div className="container max-w-screen-md px-4 py-16 print:py-8 sm:px-0">
      <header>
        <section>
          <div className="mb-2 flex items-center justify-center gap-1 ">
            <h1 className="text-2xl">
              桂江亨
              <span className="text-muted-foreground">（前端工程师）</span>
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4">
            {profile.infos.map((x) => (
              <SocialBadge key={x.text} {...x} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            {profile.mediums.map((x) => (
              <SocialBadge key={x.text} {...x} />
            ))}
          </div>
        </section>
      </header>
      <main className="space-y-4">
        <Section title="工作经历">
          {profile.experience.map((x) => (
            <Work key={x.company} {...x} />
          ))}
        </Section>

        <Section title="项目经历">
          {profile.projects.map((x) => (
            <Project key={x.title} {...x} />
          ))}
        </Section>

        <section>
          <h2>专业技能</h2>
          <ul className="mt-1 list-disc pl-8">
            <li>
              熟悉React生态,使用过react-query, react-use, zustand, formik,
              framer-motion, radix-primitive, headlessui 进行需求开发
            </li>
            <li>熟悉Next.js生态,使用过contentlayer,mdx,sandpack搭建博客</li>
            <li>熟悉Vue2开发,使用过Vue router, Vuex进行需求开发</li>
            <li>
              熟悉tailwindcss使用和自定义配置,搭建过自己的design
              system,写过较大型的
              <a
                target="_blank"
                rel="noreferrer"
                href="https://elated-archimedes-532086.netlify.app/"
              >
                Dashboard页面
              </a>
            </li>
            <li>
              熟悉Jest, React testing library, Cypress,
              Playwright等单元测试和e2e测试工具,熟悉测试用例编写,配置过测试覆盖率卡点
            </li>
            <li>
              对计算机图形学有一定的了解,写过多线程的
              <a
                target="_blank"
                rel=" noreferrer"
                href="https://github.com/guijiangheng/minpt"
              >
                光线跟踪渲染器
              </a>
              ,写过shader特效,使用three.js写过
              <a
                target="_blank"
                rel=" noreferrer"
                href="https://guijiangheng.github.io/interactive-particles/"
              >
                较复杂动效
              </a>
            </li>
            <li>
              有一定算法基础,刷过100道leetcode,在知乎写了十几篇刷题博客。较好的英文阅读能力,twitter比较活跃
            </li>
          </ul>
        </section>

        <section>
          <h2>教育经历</h2>
          <ul className="mt-1">
            <li>
              武汉理工大学 软件工程<i>硕士</i> (2014 ~ 2017)
            </li>
            <li>
              武汉理工大学 软件工程<i>学士</i> (2010 ~ 2014)
            </li>
          </ul>
        </section>

        <section>
          <h2>自我评价</h2>
          <ul className="mt-1">
            <li>
              热爱技术,写过
              <a
                target="_blank"
                href="https://github.com/guijiangheng/create-common-app"
                rel="noreferrer"
              >
                脚手架工具
              </a>
              和
              <a
                target="_blank"
                href="https://nano-toast-web.vercel.app/"
                rel="noreferrer"
              >
                toast组件
              </a>
              ； 乐于分享,搭建过自己的技术博客； 热爱学习, 经常在Udemy上买课
            </li>
            <li>了解交互设计,注重细节,代码整洁,沟通顺畅,不断进步</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
