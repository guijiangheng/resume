import { type Metadata } from 'next';
import { type ReactNode } from 'react';

import { BiLogoGmail } from 'react-icons/bi';
import {
  BsFillGeoAltFill,
  BsFillMarkdownFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsGithub,
  BsTwitter,
} from 'react-icons/bs';

import { MyLink } from '@/components/link';
import { ThemeSwitcher } from '@/components/theme-switcher';

export const metadata: Metadata = {
  title: '桂江亨 - 个人简历',
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section>
    <h2 className="text-lg">{title}</h2>
    <div className="mt-2 space-y-2">{children}</div>
  </section>
);

const Introduction = () => (
  <div className="space-y-2">
    <div className="mb-2 flex items-center justify-center gap-1 ">
      <h1 className="text-2xl">
        桂江亨
        <span className="text-muted-foreground">（前端工程师）</span>
      </h1>
    </div>

    <div className="flex flex-wrap items-center justify-center space-x-4">
      <div className="inline-flex items-center gap-0.5">
        <BsFillPersonFill />
        江西 男
      </div>
      <div className="inline-flex items-center gap-0.5">
        <BsFillGeoAltFill />
        深圳罗湖
      </div>
      <div className="inline-flex items-center gap-0.5">
        <BsFillTelephoneFill />
        19327814964
      </div>
      <MyLink type="gmail" className="gap-0.5">
        <BiLogoGmail /> kakaxizhh@gmail.com
      </MyLink>
    </div>

    <div className="flex items-center justify-center gap-4">
      <MyLink type="blog" className="gap-0.5">
        <BsFillMarkdownFill /> Blog
      </MyLink>
      <MyLink type="github" className="gap-0.5">
        <BsGithub /> Github
      </MyLink>
      <MyLink type="twitter" className="gap-0.5">
        <BsTwitter /> Twitter
      </MyLink>
    </div>
  </div>
);

const WorkExperience = () => {
  const experiences = [
    {
      company: '商汤科技',
      duration: '2024.04 ~ 2024.11',
      description:
        '负责研究院图生视频，文生视频产品的前端开发，实现了时间轴编辑、时间轴引擎、3D场景预览、摄像机预览等功能。',
    },
    {
      company: '字节跳动',
      duration: '2020.11 ~ 2024.04',
      description:
        '负责客服系统前端开发，包括智能客服、表单SDK、数据看板、知识库以及管理页面的开发。负责技术专项，包括Vue2向React迁移、页面性能优化、稳定性治理。',
    },
    {
      company: '开思汽配',
      duration: '2019.05 ~ 2020.09',
      description:
        '负责汽配电商Node微服开发，聚合诸如会员、优惠券、促销、物流、商品、订单、支付等微服务接口。',
    },
    {
      company: '深信服',
      duration: '2017.12 ~ 2019.05',
      description:
        '负责私有云平台前端开发，包括虚拟机、磁盘、内存、集群等资源的查看和管理页面。',
    },
  ];

  const Item = ({
    company,
    duration,
    description,
  }: (typeof experiences)[number]) => (
    <div>
      <h3>
        {company}
        <span className="text-muted-foreground">（{duration}）</span>
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );

  return (
    <Section title="工作经历">
      {experiences.map((experience, index) => (
        <Item key={index} {...experience} />
      ))}
    </Section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: '文生视频，图生视频应用开发',
      company: '商汤科技',
      description:
        '一款面向科普、教育、广告等3D动画视频制作的视频生成应用。用户可以选择场景和角色，然后在时间轴上编辑人物的动作、台词和相机，通过Babylon.js在页面实时漫游3D场景和预览摄像机视角，最后使用Unreal渲染高精度模型生成视频。',
      highlights: [
        '使用Vue3开发了通用的时间轴组件，支持播放、暂停、seek等操作。',
        '拆分出时间轴的数据模型，事件引擎和渲染引擎，并通过pnpm workspace以monorepo的方式组织代码，实现了复杂交互逻辑的模块化和组件化。',
        '实现了通用的时间轴执行引擎，支持在时间轴上添加任意类型的block。时间轴播放、暂停、seek等操作会触发block对应的事件，播放过程中会触发block的进入、离开和更新事件。',
        '实现了通用的时间轴渲染引擎，通过scope的slot，实现block的headless渲染。',
        '内置了Conflict Resolver和Alignment Resolver，并允许配置自定义碰撞和对齐的逻辑，实现了block拖拽时避免碰撞，拖拽时相互对齐和刻度对齐。',
        '引入了vue-use，vue-query，tiny-invariant等包，封装了大量自定义的vue hook，主动重构了大量旧代码。',
      ],
    },
    {
      title: '工单详情重构',
      company: '字节跳动',
      description:
        '客户在广告投放过程中遇到问题时会向客服平台提交工单，工单详情包括了工单展示、评论回复、历史工单、相似工单、实时聊天等功能，是客服平台的核心业务组件。之前的技术栈是Vue2，新版本重构成React。',
      highlights: [
        '使用Context封装业务逻辑，取代之前的Vuex全局Store，提高组件复用。',
        '引入React Query实现接口缓存、自动拉取、失败重试、乐观修改，部分替代全局Store，简化代码的同时提升用户体验。',
        '使用ErrorBoundary捕获异常并上报，在灰度阶段通过监控上报提前排查出非法的p标签嵌套导致富文本编辑报错崩溃。',
        '接入公司的富文本编辑器，编写了Mention插件实现@某某的功能。',
        '移动端适配，针对公司内部组建库的Cascader，Date Picker对移动端交互不友好的问题，自己实现了Cascader和Date Picker组件，实现了PC Mobile共用一套代码。',
        '梳理出20多个业务接口，提交1.6万行代码，上线后无生产事故。代码清晰，拓展性高，后续相关需求迭代从按周估时降低至按天级别。',
      ],
    },
    {
      title: '性能优化专项',
      company: '字节跳动',
      description: '在性能整治技术专项中，对客服方向的页面性能进行监控和优化。',
      highlights: [
        '使用react router data loader api，让路由来管理接口请求，而不是在组件生命周期中发起接口请求，避免瀑布流。',
        '通过bundle analyzer进行打包分析，对富文本编辑器，复杂业务弹窗等进行拆包，按路由进行拆包。',
        '对全局布局组件中实时聊天模块进行延迟加载，避免大的js解析卡死导致的白屏问题。',
        '在组件树的内层挂载更多Suspense，实现细腻度的骨架屏。',
        '插入dns-prefetch link加快第三方域名解析。接入PWA，使用Google Workbox预加载资源，实现断网也能加载页面。',
        '实现页面75%分位的加载耗时从4.5s降低至3.5s。',
      ],
    },
    {
      title: '稳定性治理',
      company: '字节跳动',
      description:
        '配置监控告警规则，接入react testing library和cypress，编写单元测试和e2e测试。',
      highlights: [
        '接入react testing library，编写组件的单元测试用例，配置流水线卡点，实现80%单元测试覆盖率。',
        '接入cypress，编写e2e测试用力，生成覆盖率报告，配置流水线卡点。编写了60条e2e测试用例，覆盖核心业务场景，测试用例98%成功率稳定运行。',
        '配置业务接口的监控告警规则，接口异常自动拉群和电话通知。',
        '监控线上JS报错，上传sourcemap到监控平台，方便排查问题。',
      ],
    },
    {
      title: '技术博客',
      company: '个人',
      description: '使用Next搭建了自己的技术博客。',
      highlights: [
        '使用MDX编写文档，通过解析Markdown AST实现目录功能和代码块粘贴复制功能。',
        '通过CSS variable定义色彩token和tailwind自定义配置实现明暗主题。',
        '通过rehype-pretty-code实现代码高亮，rehype-mathjax实现latex数学公式展示。',
        '通过sandpack实现交互式demo。',
      ],
    },
  ];

  const Item = ({
    title,
    company,
    description,
    highlights,
  }: (typeof projects)[number]) => (
    <div>
      <h3>
        {title} <span className="text-muted-foreground">（{company}）</span>
      </h3>
      <p className="text-muted-foreground">
        <span>项目介绍：</span>
        <span>{description}</span>
      </p>
      <p className="text-muted-foreground">成果亮点：</p>
      <ul className="list-disc pl-4 text-muted-foreground">
        {highlights.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <Section title="项目经历">
      {projects.map((project, index) => (
        <Item key={index} {...project} />
      ))}
    </Section>
  );
};

const Skills = () => (
  <Section title="专业技能">
    <ul className="list-disc pl-2 text-muted-foreground">
      <li>熟悉React，Next和Vue3等前端框架和相关生态。</li>
      <li>
        熟悉Tailwind，搭建过自己的Design System，写过复杂的
        <MyLink type="dashboard">Dashboard</MyLink>页面。
      </li>
      <li>熟悉Jest，React testing library，Cypress，Playwright等测试工具。</li>
      <li>
        掌握Nest，Go和Rust等后端技术。掌握基本的MySQL，Postgres增删改查，数据库事物，DB
        Migration使用。
      </li>
      <li>熟悉Docker，K8S日常操作，搭建过Gitlab Pipeline。</li>
      <li>
        对计算机图形学有一定了解，写过多线程的
        <MyLink type="minpt">光线跟踪渲染器</MyLink>
        ，使用three.js写过
        <MyLink type="particles">较复杂动效</MyLink>。
      </li>
      <li>有一定算法基础，刷过100道leetcode，在知乎写了十几篇刷题博客。</li>
      <li>英文阅读和听懂基本无障碍，twitter比较活跃。</li>
    </ul>
  </Section>
);

const Education = () => {
  const educations = [
    {
      college: '武汉理工大学',
      major: '软件工程',
      degree: '本科',
    },
    {
      college: '武汉理工大学',
      major: '软件工程',
      degree: '硕士',
    },
  ];

  return (
    <Section title="教育经历">
      <ul className="text-muted-foreground">
        {educations.map(({ college, major, degree }, index) => (
          <li key={index} className="space-x-1">
            <span>{college}</span>
            <span>{major}</span>
            <span>{degree}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

const SelfEvaluation = () => (
  <Section title="自我评价">
    <p className="text-muted-foreground">
      热爱技术，写过<MyLink type="tool">脚手架工具</MyLink>，
      <MyLink type="toast">toast组件</MyLink>， 搭建过自己的
      <MyLink type="blog">技术博客</MyLink>
      。注重细节和用户体验，善于学习，借鉴和总结。
    </p>
  </Section>
);

export default function Home() {
  return (
    <div className="container relative max-w-screen-md px-4 py-16 print:py-8 sm:px-0">
      <ThemeSwitcher className="absolute right-3 top-3 z-10" />
      <main className="space-y-4">
        <Introduction />
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
        <SelfEvaluation />
      </main>
    </div>
  );
}
