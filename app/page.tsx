import { type Metadata } from 'next';
import { type ReactNode } from 'react';

import Link from 'next/link';
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
    <div className="space-y-2">{children}</div>
  </section>
);

const WorkExperience = () => {
  const experiences = [
    {
      company: '商汤科技',
      duration: '2024.04 ~ 2024.11',
      description:
        '负责研究院图生视频，文生视频产品的前端开发，实现了时间轴编辑，时间轴引擎，3D场景预览，生成预览等功能。',
    },
    {
      company: '字节跳动',
      duration: '2020.11 ~ 2024.04',
      description:
        '负责客服系统前端开发，包括智能客服，表单SDK，数据看板，知识库，客服系统以及管理页面的开发；老代码重构，Vue2向React技术栈迁移；页面性能优化；稳定性治理。',
    },
    {
      company: '开思汽配',
      duration: '2019.05 ~ 2020.09',
      description:
        '负责汽配电商平台Node后端微服开发，聚合其他诸如会员，优惠券，促销，物流，商品信息，订单，支付等微服务接口。',
    },
    {
      company: '深信服',
      duration: '2017.12 ~ 2019.05',
      description:
        '负责私有云后台管理系统开发，包括虚拟机开机关闭,克隆,迁移等操作；虚拟机的磁盘，内存的分配和管理；展示虚拟机乃至集群的运行状态如CPU使用率,内存占用率；以及其他的一些管理页面',
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
      title: '工单详情重构',
      company: '字节跳动',
      description:
        '对客服系统最核心的工单详情模块进行重构,使用React重写Vue2代码',
      highlights: [
        '在两个半月的时间内,梳理出20多个业务接口,提交1.6万行代码,上线后无生产事故。代码清晰,拓展性高,后续相关需求迭代从按周估时降低至按天级别',
        '基于React Query实现接口缓存,自动拉取,失败重试,乐观修改,部分替代全局Store,简化代码的同时提升了用户体验',
        '使用ErrorBoundary捕获异常并上报,在灰度阶段通过监控上报提前排查出非法的p标签嵌套导致富文本编辑报错崩溃',
        '对接富文本编辑器团队,实现Mention插件,将付费的富文本编辑器完全替换成公司内部富文本编辑器',
        '移动端适配,针对公司内部组建库的Cascader,Date Picker对移动端交互不友好的问题,快速实现了Cascader和Date Picker组件,实现了PC Mobile一套代码,废弃了移动端项目',
      ],
    },
    {
      title: '性能优化专项',
      company: '字节跳动',
      description: '对页面性能进行监控和优化',
      highlights: [
        '使用react router data loader api,让由路由来管理接口请求,而不是在组件生命周期中发起接口请求,避免瀑布流',
        '通过webpack bundle analyzer进行打包分析,对富文本编辑器,复杂业务弹窗等进行拆包；按路由进行拆包',
        '包替换,使用lodash-es替换lodash；clsx替换classnames；date-fns替换moment；生产环境preact替代react；',
        '对全局Layout中存在的笨重模块进行延迟加载',
        '在组件树的内层挂载更多Suspense,实现细腻度的骨架屏',
        '插入dns-prefetch link加快第三方域名解析,使用webpackPrefetch提前加载模块',
        '实现页面75%分位的加载耗时从4.5s降低至3.5s',
      ],
    },
    {
      title: '稳定性治理',
      company: '字节跳动',
      description: '配置监控告警规则,搭建unit test和e2e,编写测试用例',
      highlights: [
        '使用react-testing-library搭建unit test,编写组件的单元测试用例,实现80%代码覆盖率,配置merge代码的单元测试增量卡点',
        '配置webpack插桩,统计e2e覆盖率,配置merge代码的e2e测试增量卡点；使用cypress编写了60条e2e测试用例,覆盖核心业务场景；测试用例98%成功率稳定运行；',
        '配置业务接口的监控告警规则,接口异常拉群和电话通知',
        '监控线上JS报错,上传sourcemap到监控平台,方便排查问题',
      ],
    },
    {
      title: '技术博客',
      company: '个人',
      description:
        '使用Next,MDX,contentlayer,sandpack,tailwind搭建了自己的技术博客',
      highlights: [
        '通过server component和SSR实现站点的SEO,Performance评分满分',
        '使用MDX语法进行编写,通过markdown parser解析AST实现目录功能（Table of content）',
        '通过tailwind编写样式,通过css variable实现明暗主题',
        '通过rehype-pretty-code实现代码高亮',
        '通过rehype-mathjax实现latex数学公式展示',
        '通过sandpack实现交互式demo',
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
      <p>
        <span>项目介绍：</span>
        <span className="text-muted-foreground">{description}</span>
      </p>
      <p>成果亮点：</p>
      <ul className="text-muted-foreground list-disc pl-4">
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
    <ul>
      <li>
        熟悉React生态,使用过react-query, react-use, zustand, formik,
        framer-motion, radix-primitive, headlessui 进行需求开发
      </li>
      <li>熟悉Next.js生态,使用过contentlayer,mdx,sandpack搭建博客</li>
      <li>熟悉Vue2开发,使用过Vue router, Vuex进行需求开发</li>
      <li>
        熟悉tailwindcss使用和自定义配置,搭建过自己的design system,写过较大型的
        <MyLink type="dashboard">Dashboard页面</MyLink>
      </li>
      <li>
        熟悉Jest, React testing library, Cypress,
        Playwright等单元测试和e2e测试工具,熟悉测试用例编写,配置过测试覆盖率卡点
      </li>
      <li>
        对计算机图形学有一定的了解,写过多线程的
        <MyLink type="minpt">光线跟踪渲染器</MyLink>
        ,写过shader特效,使用three.js写过
        <MyLink type="particles">较复杂动效</MyLink>
      </li>
      <li>
        有一定算法基础,刷过100道leetcode,在知乎写了十几篇刷题博客。较好的英文阅读能力,twitter比较活跃
      </li>
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
      <ul>
        {educations.map(({ college, major, degree }, index) => (
          <li key={index}>
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
    <ul>
      <li>
        热爱技术,写过
        <Link
          href="https://github.com/guijiangheng/create-common-app"
          target="_blank"
        >
          脚手架工具
        </Link>
        ,
        <Link href="https://nano-toast-web.vercel.app/" target="_blank">
          toast组件
        </Link>
        ； 乐于分享,搭建过自己的技术博客； 热爱学习, 经常在Udemy上买课
      </li>
      <li>了解交互设计,注重细节,代码整洁,沟通顺畅,不断进步</li>
    </ul>
  </Section>
);

export default function Home() {
  return (
    <div className="container max-w-screen-md px-4 py-16 print:py-8 sm:px-0">
      <header>
        <div className="mb-2 flex items-center justify-center gap-1 ">
          <h1 className="text-2xl">
            桂江亨
            <span className="text-muted-foreground">（前端工程师）</span>
          </h1>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="inline-flex items-center">
            <BsFillPersonFill /> 江西 男
          </div>
          <div className="inline-flex items-center">
            <BsFillGeoAltFill /> 深圳罗湖
          </div>
          <div className="inline-flex items-center">
            <BsFillTelephoneFill /> 19327814964
          </div>
          <MyLink type="gmail">
            <BiLogoGmail /> kakaxizhh@gmail.com
          </MyLink>
        </div>

        <div className="flex items-center justify-center gap-4">
          <MyLink type="blog">
            <BsFillMarkdownFill /> Blog
          </MyLink>
          <MyLink type="github">
            <BsGithub /> Github
          </MyLink>
          <MyLink type="twitter">
            <BsTwitter /> Twitter
          </MyLink>
        </div>
      </header>

      <main className="space-y-4">
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
        <SelfEvaluation />
      </main>
    </div>
  );
}
