
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AccordionItem from './AccordionItem';

export function HomepageHeroBanner(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <section id="HomepageHeroBanner" className="relative mt-12 mb-6">
      <div className="container max-w-screen-2xl mx-auto px-6 relative z-1">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row -mx-6 justify-center">
          <div className="w-full lg:w-6/12 px-6">
            <p className="text-xl font-light mb-8">{siteConfig.tagline}</p>

            <div id="accordion" className="accordion pl-14">
              <AccordionItem>
                <h2 className="mb-0" id="headingCart">
                  <button
                    className="accordion-button group relative flex font-display tracking-tight w-full items-center rounded-t-[15px] border-0 py-2 text-left text-3xl text-opacity-70 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white [&:not([data-te-collapse-collapsed])]:text-primary"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#collapseCart"
                    aria-expanded="true"
                    aria-controls="collapseCart"
                  >
                    Cart
                    <span
                      className="absolute -left-10 top-5 h-6 w-6 shrink-0 rotate-0 fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:-left-12 group-[[data-te-collapse-collapsed]]:top-3 group-[[data-te-collapse-collapsed]]:rotate-[-90deg] group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
                    >
                      <i className="gg-chevron-down group-[&:not([data-te-collapse-collapsed])]:icon-lg"></i>
                    </span>
                  </button>
                </h2>

                <div
                  id="collapseCart"
                  className="!visible"
                  data-te-collapse-item
                  data-te-collapse-show
                  aria-labelledby="headingCart"
                  data-te-parent="#accordion"
                >
                  <div className="py-6">
                    <div className="mb-6 -mx-2">
                      <span className="h-8 inline-block mx-2 mb-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                          <path d="M19.718 9c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C8.45.589 6.7.061 5.468.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545C2.057 6.319.718 7.571.718 9c0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM6.3 9c.266-.598.563-1.182.888-1.75.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654A19.3 19.3 0 0 1 14.136 9a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.163 20.163 0 0 1-1.066-1.653A19.33 19.33 0 0 1 6.3 9Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.113 14.113 0 0 1-.478 1.611h.002ZM10.217 3.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.25 16.25 0 0 0 7.71 4.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM1.718 9c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C2.692 10.83 1.718 9.9 1.718 9Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.232 14.232 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.562 16.562 0 0 0 15.216 9c.352-.811.638-1.65.856-2.507C17.743 7.17 18.718 8.1 18.718 9c0 .9-.975 1.83-2.646 2.507h-.004Z"/>
                          <path d="M10.215 10.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.788 1.788 0 0 0 1.786 1.794Z"/>
                        </svg>
                      </span>
                      <span className="h-8 inline-block mx-2 mb-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                          <path d="M12.5 0 10 4.156 7.857 0H0l10 18L20 0h-7.5ZM2.486 1.5h2.4L10 10.8l5.107-9.3h2.4L10 15.021 2.486 1.5Z"/>
                        </svg>
                      </span>
                      <span className="h-8 inline-block mx-2 mb-2">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                          <path d="M9.782.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231C14.488 3.365 13.551.6 9.782.72ZM4.8 6.979A4.772 4.772 0 0 0 0 11.151a3.43 3.43 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231C9.51 9.623 8.573 6.853 4.8 6.979Z"/>
                        </svg>
                      </span>
                    </div>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                    coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                    occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                    heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem>
                <h2 className="mb-0" id="headingUpsells">
                  <button
                    className="accordion-button group relative flex w-full font-display tracking-tight items-center rounded-none border-0 py-2 text-left text-3xl text-opacity-70 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseUpsells"
                    aria-expanded="false"
                    aria-controls="collapseUpsells"
                  >
                    Upsells
                    <span
                      className="absolute -left-10 top-5 h-6 w-6 shrink-0 rotate-0 fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:-left-12 group-[[data-te-collapse-collapsed]]:top-3 group-[[data-te-collapse-collapsed]]:rotate-[-90deg] group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
                    >
                      <i className="gg-chevron-down group-[&:not([data-te-collapse-collapsed])]:icon-lg"></i>
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseUpsells"
                  className="!visible hidden"
                  data-te-collapse-item
                  aria-labelledby="headingUpsells"
                  data-te-parent="#accordion"
                >
                  <div className="py-6">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                    coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                    occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                    heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem>
                <h2 className="accordion-header mb-0" id="headingAnalytics">
                  <button
                    className="accordion-button group relative flex font-display tracking-tight w-full items-center rounded-t-[15px] py-2 text-left text-3xl text-opacity-70 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseAnalytics"
                    aria-expanded="false"
                    aria-controls="collapseAnalytics"
                  >
                    Analytics
                    <span
                      className="absolute -left-10 top-5 h-6 w-6 shrink-0 rotate-0 fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:-left-12 group-[[data-te-collapse-collapsed]]:top-3 group-[[data-te-collapse-collapsed]]:rotate-[-90deg] group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white"
                    >
                      <i className="gg-chevron-down group-[&:not([data-te-collapse-collapsed])]:icon-lg"></i>
                    </span>
                  </button>
                </h2>

                <div
                  id="collapseAnalytics"
                  className="!visible hidden"
                  data-te-collapse-item
                  aria-labelledby="headingAnalytics"
                  data-te-parent="#accordion"
                >
                  <div className="py-6">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                    coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                    occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                    heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </AccordionItem>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-6 py-12 flex flex-col justify-center items-center">
            <img
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Window_shopping_re_0kbm.svg"
              alt="Hero banner image"
              className="max-w-full lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageHeroBanner;
