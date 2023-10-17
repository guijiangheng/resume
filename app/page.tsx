import { type Metadata } from 'next';
import { BiLogoGmail } from 'react-icons/bi';
import {
  BsFillGeoAltFill,
  BsFillMarkdownFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsGithub,
  BsTwitter,
} from 'react-icons/bs';

export const metadata: Metadata = {
  title: '桂江亨个人简历',
};

export default function Home() {
  return (
    <div className="container py-16 font-serif print:py-8">
      <header>
        <div className="mb-2 flex items-center justify-center gap-1 ">
          <div className="text-2xl">桂江亨</div>
          <div>前端工程师</div>
        </div>

        <div className="flex flex-wrap items-center justify-center space-x-4">
          <div className="flex items-center gap-1">
            <BsFillPersonFill /> 1992.09 男 江西
          </div>
          <div className="flex items-center gap-1">
            <BsFillGeoAltFill /> 深圳南山
          </div>
          <div className="flex items-center gap-1">
            <BsFillTelephoneFill /> 19327814964
          </div>
          <a target="_blank" href="mailto:kakaxizhh@gmail.com" rel="noreferrer">
            <BiLogoGmail /> kakaxizhh@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <a
            target="_blank"
            rel=" noreferrer"
            href="https://blog-rouge-psi-92.vercel.app/"
          >
            <BsFillMarkdownFill /> Blog
          </a>
          <a
            target="_blank"
            rel=" noreferrer"
            href="https://github.com/guijiangheng"
          >
            <BsGithub /> Github
          </a>
          <a
            target="_blank"
            rel=" noreferrer"
            href="https://twitter.com/guijiangheng"
          >
            <BsTwitter /> Twitter
          </a>
          <a
            target="_blank"
            rel=" noreferrer"
            href="https://www.zhihu.com/people/gui-jiang-heng"
          >
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
            </svg>{' '}
            知乎
          </a>
        </div>
      </header>
      <main className="mt-12 flex flex-col gap-8 print:gap-4">
        <section>
          <h2>工作经历</h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3>字节跳动 - 前端开发 (2020.11 ~ 至今)</h3>
              <p>
                负责客服系统前端开发,包括智能客服,表单SDK,数据看板,知识库,客服系统以及管理页面的开发;老代码重构,Vue2向React技术栈迁移；页面性能优化；稳定性治理
              </p>
            </div>

            <div>
              <h3>开思汽配 - Node中台开发 (2019.05 ~ 2020.09)</h3>
              <p>
                使用Hapi,Joi,Mongodb编写Nodejs中间层,聚合其他诸如会员,优惠券,促销,物流,
                商品信息,订单,支付等微服务接口,为Android和IOS电商app提供BFF接口.
              </p>
            </div>

            <div>
              <h3>深信服 - 前端开发 (2017.12 ~ 2019.05)</h3>
              <p>
                使⽤Webpack +
                Vue编写私有云后台管理系统,包括虚拟机开机关闭,克隆,迁移等操作;虚拟机的磁盘,内存的分配和管理;
                展示虚拟机乃至集群的运行状态如CPU使用率,内存占用率;以及其他的一些管理页面
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>项目经历</h2>

          <div className="space-y-4">
            <div>
              <h3>工单详情重构（字节跳动）</h3>
              <p>
                <strong>项目介绍：</strong>
                对客服系统最核心的工单详情模块进行重构,使用React重写Vue2代码
              </p>

              <p>
                <strong>成果亮点：</strong>
              </p>

              <ul className="list-disc pl-8">
                <li>
                  在两个半月的时间内,梳理出20多个业务接口,提交1.6万行代码,上线后无生产事故。代码清晰,拓展性高,后续相关需求迭代从按周估时降低至按天级别
                </li>
                <li>
                  基于React
                  Query实现接口缓存,自动拉取,失败重试,乐观修改,部分替代全局Store,简化代码的同时提升了用户体验
                </li>
                <li>
                  使用ErrorBoundary捕获异常并上报,在灰度阶段通过监控上报提前排查出非法的p标签嵌套导致富文本编辑报错崩溃
                </li>
                <li>
                  对接富文本编辑器团队,实现Mention插件,将付费的富文本编辑器完全替换成公司内部富文本编辑器
                </li>
                <li>
                  移动端适配,针对公司内部组建库的Cascader,Date
                  Picker对移动端交互不友好的问题,快速实现了Cascader和Date
                  Picker组件,实现了PC Mobile一套代码,废弃了移动端项目
                </li>
              </ul>
            </div>

            <div>
              <h3>性能优化专项（字节跳动）</h3>
              <p>
                <strong>项目介绍：</strong>
                对页面性能进行监控和优化
              </p>

              <p>
                <strong>成果亮点：</strong>
              </p>

              <ul className="list-disc pl-8">
                <li>
                  使用react router data loader
                  api,让由路由来管理接口请求,而不是在组件生命周期中发起接口请求,避免瀑布流
                </li>
                <li>
                  通过webpack bundle
                  analyzer进行打包分析,对富文本编辑器,复杂业务弹窗等进行拆包；按路由进行拆包
                </li>
                <li>
                  包替换,使用lodash-es替换lodash；clsx替换classnames；date-fns替换moment；生产环境preact替代react；
                </li>
                <li>对全局Layout中存在的笨重模块进行延迟加载</li>
                <li>在组件树的内层挂载更多Suspense,实现细腻度的骨架屏</li>
                <li>
                  插入dns-prefetch
                  link加快第三方域名解析,使用webpackPrefetch提前加载模块
                </li>
                <li>实现页面75%分位的加载耗时从4.5s降低至3.5s</li>
              </ul>
            </div>

            <div>
              <h3>稳定性治理（字节跳动）</h3>
              <p>
                <strong>项目介绍：</strong>
                配置监控告警规则,搭建unit test和e2e,编写测试用例
              </p>
              <p>
                <strong>成果亮点：</strong>
              </p>

              <ul className="list-disc pl-8">
                <li>
                  使用react-testing-library搭建unit
                  test,编写组件的单元测试用例,实现80%代码覆盖率,配置merge代码的单元测试增量卡点
                </li>
                <li>
                  配置webpack插桩,统计e2e覆盖率,配置merge代码的e2e测试增量卡点；使用cypress编写了60条e2e测试用例,覆盖核心业务场景；测试用例98%成功率稳定运行；
                </li>
                <li>配置业务接口的监控告警规则,接口异常拉群和电话通知</li>
                <li>监控线上JS报错,上传sourcemap到监控平台,方便排查问题</li>
              </ul>
            </div>

            <div>
              <h3>技术博客（个人）</h3>
              <p>
                <strong>项目介绍：</strong>
                使用Next,MDX,contentlayer,sandpack,tailwind搭建了自己的技术博客
              </p>

              <p>
                <strong>成果亮点：</strong>
              </p>

              <ul className="list-disc pl-8">
                <li>
                  通过server component和SSR实现站点的SEO,Performance评分满分
                </li>
                <li>
                  使用MDX语法进行编写,通过markdown
                  parser解析AST实现目录功能（Table of content）
                </li>
                <li>通过tailwind编写样式,通过css variable实现明暗主题</li>
                <li>通过rehype-pretty-code实现代码高亮</li>
                <li>通过rehype-mathjax实现latex数学公式展示</li>
                <li>通过sandpack实现交互式demo</li>
              </ul>
            </div>
          </div>
        </section>

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
              ; 乐于分享,搭建过自己的技术博客; 热爱学习, 经常在Udemy上买课
            </li>
            <li>了解交互设计,注重细节,代码整洁,沟通顺畅,不断进步</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
