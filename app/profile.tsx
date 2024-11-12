import { BiLogoGmail } from 'react-icons/bi';
import {
  BsFillGeoAltFill,
  BsFillMarkdownFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsGithub,
  BsTwitter,
} from 'react-icons/bs';

export const profile = {
  infos: [
    {
      icon: <BsFillPersonFill />,
      text: '江西 男',
    },
    {
      icon: <BsFillGeoAltFill />,
      text: '深圳罗湖',
    },
    {
      icon: <BsFillTelephoneFill />,
      text: '19327814964',
    },
    {
      icon: <BiLogoGmail />,
      text: 'kakaxizhh@gmail.com',
      href: 'mailto:kakaxizhh@gmail.com',
    },
  ],
  mediums: [
    {
      icon: <BsFillMarkdownFill />,
      text: 'Blog',
      href: 'https://guijiangheng.vercel.app/',
    },
    {
      icon: <BsGithub />,
      text: 'Github',
      href: 'https://github.com/guijiangheng',
    },
    {
      icon: <BsTwitter />,
      text: 'Twitter',
      href: 'https://twitter.com/guijiangheng',
    },
    {
      icon: (
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              stroke="currentColor"
              d="M12.344 17.963l-1.688 1.074-2.131-3.35c-.44 1.402-1.172 2.665-2.139 3.825-.402.483-.82.918-1.301 1.375-.155.147-.775.717-.878.82l-1.414-1.414c.139-.139.787-.735.915-.856.43-.408.795-.79 1.142-1.206 1.266-1.518 2.03-3.21 2.137-5.231H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.857L2.486 8.143c1.395-.838 2.425-2.604 3.038-5.36l1.952.434c-.14.633-.303 1.227-.489 1.783H11.5v2H9v4h2.5v2H9.185l3.159 4.963zm3.838-.07L17.298 17H19V7h-4v10h.736l.446.893zM13 5h8v14h-3l-2.5 2-1-2H13V5z"
            />
          </g>
        </svg>
      ),
      text: '知乎',
      href: 'https://www.zhihu.com/people/gui-jiang-heng',
    },
  ],
  experience: [
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
  ],
  projects: [
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
  ],
};
