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
    <div className="container py-16 font-serif print:py-12">
      <header>
        <div className="mb-2 flex items-center justify-center gap-1 ">
          <div className="text-2xl">桂江亨</div>
          <div>前端工程师</div>
        </div>

        <div className="flex items-center justify-center gap-4 text-gray-700">
          <div className="flex items-center gap-1">
            <BsFillPersonFill /> 1992.09 男 江西
          </div>
          <div className="flex items-center gap-1">
            <BsFillGeoAltFill /> 深圳南山 GrContactInfo
          </div>
          <div className="flex items-center gap-1">
            <BsFillTelephoneFill /> 19327814964
          </div>
          <a target="_blank" href="mailto:kakaxizhh@gmail.com" rel="noreferrer">
            <BiLogoGmail /> kakaxizhh@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 text-gray-700">
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
                负责客服系统前端开发,包括智能客服,表单SDK,数据看板,知识库,客服系统以及管理页面的开发;
                老代码重构,Vue2向React技术栈迁移
              </p>
              <p>
                负责页面性能优化,通过性能数据埋点上报确定待优化页面,通过分包,合理Suspense,延迟加载,React
                query缓存接口数据,避免接口依赖等手段,降低首屏幕等待时间
              </p>
              <p>
                负责稳定性治理,包括接口异常的监控告警,JS错误治理,搭建单元测试和e2e测试,测试用例编写和覆盖率卡点
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
                Vue编写私有云后台管理系统，包括虚拟机开机关闭,克隆,迁移等操作;虚拟机的磁盘,内存的分配和管理;
                展示虚拟机乃至集群的运行状态如CPU使用率,内存占用率;以及其他的一些管理页面
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>专业技能</h2>
          <ul className="mt-1">
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
            <li>有一定算法基础,刷过100道leetcode,在知乎写了十几篇刷题博客</li>
            <li>较好的英文阅读能力,twitter比较活跃</li>
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
                toast组建
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
