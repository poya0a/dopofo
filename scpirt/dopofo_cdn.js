const SkipComponent = () => {
  return (
    <ul id='skip'>
        <li><a href="#header" title='메뉴 바로가기'>메뉴 바로가기</a></li>
        <li><a href="#main"  title='메인 바로가기'>메인 바로가기</a></li>
        <li><a href="#footer"  title='하단 바로가기'>하단 바로가기</a></li>
    </ul>
  );
};

const WrapComponent = () => {
  return (
    <div id='wrap'>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
      <GoToTopComponent/>
      <QuickComponent/>
    </div>
  );
};

  const HeaderComponent = () => {
    return (
      <header id='header'>
        <div className="container">
          <div className="gap">
            <div className="wrap">
              <div id="logo">
                <h1><a href="#!" title="DOPOFO"><img src="./images/logo.png" alt="logo" /></a></h1>
              </div>
              <div className="mobile-btn-box">
                <a href="#!" className="mobile-btn">
                  <span>
                    <i className="line line1"></i>
                    <i className="line line2"></i>
                    <i className="line line3"></i>
                  </span>
                </a>
              </div>
              <nav id="nav">
                <ul className="pc-menu">
                  <li className="col1356">
                    <a href="#!" className="main-btn" title="HOME">HOME</a>
                    <div className="sub sub1 sub1356">
                      <div className="sub-gap">
                         <ul>
                           <li>
                              <dl>
                                <dt><a href="#!" title="CLASSIC HOMEPAGES"><span>CLASSIC HOMEPAGES</span></a></dt>
                                <dd><a href="#!" title="Classic Corporate"><span>Classic Corporate</span></a></dd>
                                <dd><a href="#!" title="Classic Digital Agency"><span>Classic Digital Agency</span></a></dd>
                                <dd><a href="#!" title="Classic Innovation Agency"><span>Classic Innovation Agency</span></a></dd>
                                <dd><a href="#!" title="Classic Web Agency"><span>Classic Web Agency</span></a></dd>
                                <dd><a href="#!" title="Classic One Page"><span>Classic One Page</span></a></dd>
                                <dd><a href="#!" title="Classic Start Up"><span>Classic Start Up</span></a></dd>
                                <dt><a href="#!" title="Classic Interactive Agency"><span>Classic Interactive Agency</span></a></dt>
                                <dd><a href="#!" title="Classic Business"><span className="sub-new">Classic Business</span></a></dd>
                                <dd><a href="#!" title="Classic Shop"><span>Classic Shop</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="CREATIVE HOMEPAGES"><span>CREATIVE HOMEPAGES</span></a></dt>
                                <dd><a href="#!" title="Creative Studio"><span>Creative Studio</span></a></dd>
                                <dd><a href="#!" title="Creative Business"><span>Creative Business</span></a></dd>
                                <dd><a href="#!" title="Creative Simple Portfolio"><span>Creative Simple Portfolio</span></a></dd>
                                <dd><a href="#!" title="Creative Branding Agency"><span>Creative Branding Agency</span></a></dd>
                                <dd><a href="#!" title="Creative Minimalist Portfolio"><span className="sub-new">Creative Minimalist Portfolio</span></a></dd>
                                <dd><a href="#!" title="Creative Small Business"><span>Creative Small Business</span></a></dd>
                                <dd><a href="#!" title="Creative Designer"><span>Creative Designer</span></a></dd>
                                <dd><a href="#!" title="Creative Agency"><span>Creative Agency</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="PORTFOLIO HOMEPAGES"><span>PORTFOLIO HOMEPAGES</span></a></dt>
                                <dd><a href="#!" title="Portfolio Minimal"><span>Portfolio Minimal</span></a></dd>
                                <dd><a href="#!" title="Portfolio Multiple Carousel"><span>Portfolio Multiple Carousel</span></a></dd>
                                <dd><a href="#!" title="Portfolio Centered Slides"><span>Portfolio Centered Slides</span></a></dd>
                                <dd><a href="#!" title="Portfolio Personal"><span>Portfolio Personal</span></a></dd>
                                <dd><a href="#!" title="Portfolio Metro"><span>Portfolio Metro</span></a></dd>
                                <dd><a href="#!" title="Portfolio Full Screen – Vertical"><span>Portfolio Full Screen – Vertical</span></a></dd>
                                <dd><a href="#!" title="Portfolio Photographer"><span>Portfolio Photographer</span></a></dd>
                                <dd><a href="#!" title="Portfolio Parallax"><span>Portfolio Parallax</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="BLOG HOMEPAGES"><span>BLOG HOMEPAGES</span></a></dt>
                                <dd><a href="#!" title="Blog Grid"><span>Blog Grid</span></a></dd>
                                <dd><a href="#!" title="Blog Masonry"><span>Blog Masonry</span></a></dd>
                                <dd><a href="#!" title="Blog Clean"><span>Blog Clean</span></a></dd>
                                <dd><a href="#!" title="Blog Personal"><span>Blog Personal</span></a></dd>
                              </dl>
                         </li>
                         </ul>   
                      </div>
                    </div>
                  </li>
                
                  <li className="col24">
                    <a href="#!" className="main-btn" title="PAGES">PAGES</a>
                    <div className="sub sub2 sub24">
                      <div className="sub-gap">
                        <ul>
                          <li>
                              <a href="#!" className="sub-btn" title="About"><span className='sub-span'>About</span></a>
                              <div className="sub-sub sub-sub1">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="About Us Simple"><span>About Us Simple</span></a></li>
                                    <li><a href="#!" title="About Us Classic"><span>About Us Classic</span></a></li>
                                    <li><a href="#!" title="About Us Modern"><span>About Us Modern</span></a></li>
                                    <li><a href="#!" title="About Me"><span>About Me</span></a></li>
                                  </ul>
                                </div>
                              </div>
                          </li>
                          <li>
                              <a href="#!" className="sub-btn" title="Services"><span className='sub-span'>Services</span></a>
                              <div className="sub-sub sub-sub2">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Services Simple"><span>Services Simple</span></a></li>
                                    <li><a href="#!" title="Services Classic"><span>Services Classic</span></a></li>
                                    <li><a href="#!" title="Services Modern"><span>Services Modern</span></a></li>
                                  </ul>
                                </div>
                              </div>
                          </li>
                          <li>
                              <a href="#!" className="sub-btn" title="Contact"><span className='sub-span'>Contact</span></a>
                              <div className="sub-sub sub-sub3">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Contact Simple"><span>Contact Simple</span></a></li>
                                    <li><a href="#!" title="Contact Classic"><span>Contact Classic</span></a></li>
                                    <li><a href="#!" title="Contact Classic – Style 02"><span>Contact Classic – Style 02</span></a></li>
                                    <li><a href="#!" title="Contact Modern"><span>Contact Modern</span></a></li>
                                  </ul>
                                </div>
                              </div>
                          </li>
                          <li>
                              <a href="#!" className="sub-btn" title="Team"><span className='sub-span'>Team</span></a>
                              <div className="sub-sub sub-sub4">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Team Simple"><span>Team Simple</span></a></li>
                                    <li><a href="#!" title="Team Classic"><span>Team Classic</span></a></li>
                                  </ul>
                                </div>
                              </div>                            
                          </li>
                          <li>
                              <a href="#!" className="sub-btn" title="Addition Pages"><span className='sub-span'>Addition Pages</span></a>
                              <div className="sub-sub sub-sub5">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Our Clients"><span>Our Clients</span></a></li>
                                    <li><a href="#!" title="Error 404"><span>Error 404</span></a></li>
                                    <li><a href="#!" title="Coming Soon"><span>Coming Soon</span></a></li>
                                    <li><a href="#!" title="Coming Soon – Style 02"><span>Coming Soon – Style 02</span></a></li>
                                    <li><a href="#!" title="Faq"><span>Faq</span></a></li>
                                    <li><a href="#!" title="Maintenance"><span>Maintenance</span></a></li>
                                    <li><a href="#!" title="Search Result"><span>Search Result</span></a></li>
                                    <li><a href="#!" title="Pricing"><span>Pricing</span></a></li>
                                  </ul>
                                </div>
                              </div>                            
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                
                  <li className="col1356">
                    <a href="#!" className="main-btn" title="PORTFOLIO">PORTFOLIO</a>
                    <div className="sub sub3 sub1356">
                      <div className="sub-gap">
                         <ul>
                           <li>
                              <dl>
                                <dt><a href="#!" title="CLASSIC HOMEPAGES"><span>CLASSIC HOMEPAGES</span></a></dt>
                                <dd><a href="#!" title="Classic Corporate"><span>Classic Corporate</span></a></dd>
                                <dd><a href="#!" title="Classic Digital Agency"><span>Classic Digital Agency</span></a></dd>
                                <dd><a href="#!" title="Classic Innovation Agency"><span>Classic Innovation Agency</span></a></dd>
                                <dd><a href="#!" title="Classic Web Agency"><span>Classic Web Agency</span></a></dd>
                                <dd><a href="#!" title="Classic One Page"><span>Classic One Page</span></a></dd>
                                <dd><a href="#!" title="Classic Start Up"><span>Classic Start Up</span></a></dd>
                                <dt><a href="#!" title="Classic Interactive Agency"><span>Classic Interactive Agency</span></a></dt>
                                <dd><a href="#!" title="Classic Business"><span className="sub-new">Classic Business</span></a></dd>
                                <dd><a href="#!" title="Classic Shop"><span>Classic Shop</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="CREATIVE HOMEPAGES"><span>CREATIVE HOMEPAGES</span></a></dt>
                                <dd><a href="#!" title="Creative Studio"><span>Creative Studio</span></a></dd>
                                <dd><a href="#!" title="Creative Business"><span>Creative Business</span></a></dd>
                                <dd><a href="#!" title="Creative Simple Portfolio"><span>Creative Simple Portfolio</span></a></dd>
                                <dd><a href="#!" title="Creative Branding Agency"><span>Creative Branding Agency</span></a></dd>
                                <dd><a href="#!" title="Creative Minimalist Portfolio"><span className="sub-new">Creative Minimalist Portfolio</span></a></dd>
                                <dd><a href="#!" title="Creative Small Business"><span>Creative Small Business</span></a></dd>
                                <dd><a href="#!" title="Creative Designer"><span>Creative Designer</span></a></dd>
                                <dd><a href="#!" title="Creative Agency"><span>Creative Agency</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="PORTFOLIO HOMEPAGES"><span>PORTFOLIO HOMEPAGES</span></a></dt>
                                <dd><a href="#!" title="Portfolio Minimal"><span>Portfolio Minimal</span></a></dd>
                                <dd><a href="#!" title="Portfolio Multiple Carousel"><span>Portfolio Multiple Carousel</span></a></dd>
                                <dd><a href="#!" title="Portfolio Centered Slides"><span>Portfolio Centered Slides</span></a></dd>
                                <dd><a href="#!" title="Portfolio Personal"><span>Portfolio Personal</span></a></dd>
                                <dd><a href="#!" title="Portfolio Metro"><span>Portfolio Metro</span></a></dd>
                                <dd><a href="#!" title="Portfolio Full Screen – Vertical"><span>Portfolio Full Screen – Vertical</span></a></dd>
                                <dd><a href="#!" title="Portfolio Photographer"><span>Portfolio Photographer</span></a></dd>
                                <dd><a href="#!" title="Portfolio Parallax"><span>Portfolio Parallax</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="BLOG HOMEPAGES"><span>BLOG HOMEPAGES</span></a></dt>
                                <dd><a href="#!" title="Blog Grid"><span>Blog Grid</span></a></dd>
                                <dd><a href="#!" title="Blog Masonry"><span>Blog Masonry</span></a></dd>
                                <dd><a href="#!" title="Blog Clean"><span>Blog Clean</span></a></dd>
                                <dd><a href="#!" title="Blog Personal"><span>Blog Personal</span></a></dd>
                              </dl>
                         </li>
                         </ul>   
                      </div>
                    </div>
                  </li>
                
                  <li className="col24">
                    <a href="#!" className="main-btn" title="BLOG">BLOG</a>
                    <div className="sub sub4 sub24">
                      <div className="sub-gap">
                        <ul>
                          <li>
                              <a href="#!" className="sub-btn" title="Blog Standard"><span className='sub-span'>Blog Standard</span></a>
                              <div className="sub-sub sub-sub1">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Blog Standard – Full Width"><span>Blog Standard – Full Width</span></a></li>
                                    <li><a href="#!" title="Blog Standard With Left Sidebar"><span>Blog Standard With Left Sidebar</span></a></li>
                                    <li><a href="#!" title="Blog Standard With Right Sidebar"><span>Blog Standard With Right Sidebar</span></a></li>
                                  </ul>
                                </div>
                              </div>
                          </li>
                          <li>
                              <a href="#!" className="sub-btn" title="Blog Classic"><span className='sub-span'>Blog Classic</span></a>
                              <div className="sub-sub sub-sub2">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Blog Classic"><span>Blog Classic</span></a></li>
                                    <li><a href="#!" title="Blog Classic – Full Width"><span>Blog Classic – Full Width</span></a></li>
                                  </ul>
                                </div>
                              </div>
                          </li>
                          <li>
                              <a href="#!" className="sub-btn" title="Blog List"><span className='sub-span'>Blog List</span></a>
                              <div className="sub-sub sub-sub3">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Blog List"><span>Blog List</span></a></li>
                                    <li><a href="#!" title="Blog List – Full Width"><span>Blog List – Full Width</span></a></li>
                                  </ul>
                                </div>
                              </div>
                          </li>
                          <li>
                              <a href="#!" className="sub-btn" title="Blog Grid"><span className='sub-span'>Blog Grid</span></a>
                              <div className="sub-sub sub-sub4">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Blog Grid"><span>Blog Grid</span></a></li>
                                    <li><a href="#!" title="Blog Grid – Full Width"><span>Blog Grid – Full Width</span></a></li>
                                  </ul>
                                </div>
                              </div>                            
                          </li>
                          <li>
                              <a href="#!" className="sub-btn" title="Blog Masonary"><span className='sub-span'>Blog Masonary</span></a>
                              <div className="sub-sub sub-sub5">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Blog Masonry"><span>Blog Masonry</span></a></li>
                                    <li><a href="#!" title="Blog Masonry – Full Width"><span>Blog Masonry – Full Width</span></a></li>
                                  </ul>
                                </div>
                              </div>                            
                          </li>
                          <li>
                              <a href="#!" className="sub-btn" title="Blog Simple"><span className='sub-span'>Blog Simple</span></a>
                              <div className="sub-sub sub-sub5">
                                <div className="sub-gap">
                                  <ul>
                                    <li><a href="#!" title="Blog Simple"><span>Blog Simple</span></a></li>
                                    <li><a href="#!" title="Blog Simple – Full Width"><span>Blog Simple – Full Width</span></a></li>
                                  </ul>
                                </div>
                              </div>                            
                            </li>
                            <li>
                                <a href="#!" className="sub-btn" title="Blog Clean"><span className='sub-span'>Blog Clean</span></a>
                                <div className="sub-sub sub-sub5">
                                  <div className="sub-gap">
                                    <ul>
                                      <li><a href="#!" title="Blog Clean"><span>Blog Clean</span></a></li>
                                      <li><a href="#!" title="Blog Clean – Full Width"><span>Blog Clean – Full Width</span></a></li>
                                    </ul>
                                  </div>
                                </div>                            
                            </li>
                            <li>
                                <a href="#!" className="sub-btn" title="Blog Images"><span className='sub-span'>Blog Images</span></a>
                                <div className="sub-sub sub-sub5">
                                  <div className="sub-gap">
                                    <ul>
                                      <li><a href="#!" title="Blog Images"><span>Blog Images</span></a></li>
                                      <li><a href="#!" title="Blog Images – Full Width"><span>Blog Images – Full Width</span></a></li>
                                    </ul>
                                  </div>
                                </div>                            
                            </li>
                            <li>
                                <a href="#!" className="sub-btn" title="Blog Only Text"><span className='sub-span'>Blog Only Text</span></a>
                                <div className="sub-sub sub-sub5">
                                  <div className="sub-gap">
                                    <ul>
                                      <li><a href="#!" title="Blog Only Text"><span>Blog Only Text</span></a></li>
                                      <li><a href="#!" title="Blog Only Text – Full Width"><span>Blog Only Text – Full Width</span></a></li>
                                    </ul>
                                  </div>
                                </div>                            
                            </li>
                            <li>
                                <a href="#!" className="sub-btn" title="Post Layout"><span className='sub-span'>Post Layout</span></a>
                                <div className="sub-sub sub-sub5">
                                  <div className="sub-gap">
                                    <ul>
                                      <li><a href="#!" title="Blog Post Layout 01"><span>Blog Post Layout 01</span></a></li>
                                      <li><a href="#!" title="Blog Post Layout 02"><span>Blog Post Layout 02</span></a></li>
                                      <li><a href="#!" title="Blog Post Layout 03"><span>Blog Post Layout 03</span></a></li>
                                      <li><a href="#!" title="Blog Post Layout 04"><span>Blog Post Layout 04</span></a></li>
                                      <li><a href="#!" title="Blog Post Layout 05"><span>Blog Post Layout 05</span></a></li>
                                    </ul>
                                  </div>
                                </div>                            
                            </li>
                            <li>
                                <a href="#!" className="sub-btn" title="Post Type"><span className='sub-span'>Post Type</span></a>
                                <div className="sub-sub sub-sub5">
                                  <div className="sub-gap">
                                    <ul>
                                      <li><a href="#!" title="Standard Post"><span>Standard Post</span></a></li>
                                      <li><a href="#!" title="Gallery Post"><span>Gallery Post</span></a></li>
                                      <li><a href="#!" title="Slider Post"><span>Slider Post</span></a></li>
                                      <li><a href="#!" title="Html5 Video Post"><span>Html5 Video Post</span></a></li>
                                      <li><a href="#!" title="Youtube Video Post"><span>Youtube Video Post</span></a></li>
                                      <li><a href="#!" title="Vimeo Video Post"><span>Vimeo Video Post</span></a></li>
                                      <li><a href="#!" title="Audio Post"><span>Audio Post</span></a></li>
                                      <li><a href="#!" title="Blockquote Post"><span>Blockquote Post</span></a></li>
                                      <li><a href="#!" title="Full Width Post"><span>Full Width Post</span></a></li>
                                    </ul>
                                  </div>
                                </div>                            
                            </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                
                  <li className="col1356">
                    <a href="#!" className="main-btn" title="ELEMENTS">ELEMENTS</a>
                    <div className="sub sub5 sub1356">
                      <div className="sub-gap">
                         <ul>
                           <li>
                              <dl>
                                <dt><a href="#!" title="GENERAL ELEMENTS"><span>GENERAL ELEMENTS</span></a></dt>
                                <dd><a href="#!" title="Accordions"><span>Accordions</span></a></dd>
                                <dd><a href="#!" title="Buttons"><span>Buttons</span></a></dd>
                                <dd><a href="#!" title="Team"><span>Team</span></a></dd>
                                <dd><a href="#!" title="Team Carousel"><span>Team Carousel</span></a></dd>
                                <dd><a href="#!" title="Clients"><span>Clients</span></a></dd>
                                <dd><a href="#!" title="Client Carousel"><span>Client Carousel</span></a></dd>
                                <dd><a href="#!" title="Subscribe"><span>Subscribe</span></a></dd>
                                <dd><a href="#!" title="Call To Action"><span>Call To Action</span></a></dd>
                                <dd><a href="#!" title="Tab"><span>Tab</span></a></dd>
                                <dd><a href="#!" title="Google Map"><span>Google Map</span></a></dd>
                                <dd><a href="#!" title="Text Slider"><span>Text Slider</span></a></dd>
                                <dd><a href="#!" title="Contact Form"><span>Contact Form</span></a></dd>
                                <dd><a href="#!" title="Image Gallery"><span>Image Gallery</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="INFOGRAPHICS / ICONS"><span>INFOGRAPHICS / ICONS</span></a></dt>
                                <dd><a href="#!" title="Process Bar"><span>Process Bar</span></a></dd>
                                <dd><a href="#!" title="Icon With Text"><span>Icon With Text</span></a></dd>
                                <dd><a href="#!" title="Overline Icon Box"><span>Overline Icon Box</span></a></dd>
                                <dd><a href="#!" title="Custom Icon With Text"><span>Custom Icon With Text</span></a></dd>
                                <dd><a href="#!" title="Counters"><span>Counters</span></a></dd>
                                <dd><a href="#!" title="Countdown"><span>Countdown</span></a></dd>
                                <dd><a href="#!" title="Pie Charts"><span>Pie Charts</span></a></dd>
                                <dd><a href="#!" title="Text Box"><span>Text Box</span></a></dd>
                                <dd><a href="#!" title="Fancy Text Box"><span>Fancy Text Box</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="INTERACTIVE ELEMENTS"><span>INTERACTIVE ELEMENTS</span></a></dt>
                                <dd><a href="#!" title="Testimonials"><span>Testimonials</span></a></dd>
                                <dd><a href="#!" title="Testimonials Carousel"><span>Testimonials Carousel</span></a></dd>
                                <dd><a href="#!" title="Video"><span>Video</span></a></dd>
                                <dd><a href="#!" title="Interactive Banners"><span>Interactive Banners</span></a></dd>
                                <dd><a href="#!" title="Services"><span>Services</span></a></dd>
                                <dd><a href="#!" title="Portfolio Slider"><span>Portfolio Slider</span></a></dd>
                                <dd><a href="#!" title="Info Banner"><span>Info Banner</span></a></dd>
                                <dd><a href="#!" title="Rotate Box"><span>Rotate Box</span></a></dd>
                                <dd><a href="#!" title="Process Step"><span>Process Step</span></a></dd>
                                <dd><a href="#!" title="Blog Posts"><span>Blog Posts</span></a></dd>
                                <dd><a href="#!" title="Instagram"><span>Instagram</span></a></dd>
                                <dd><a href="#!" title="Parallax Scrolling"><span>Parallax Scrolling</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="TEXT & CONTAINERS"><span>TEXT & CONTAINERS</span></a></dt>
                                <dd><a href="#!" title="Heading"><span>Heading</span></a></dd>
                                <dd><a href="#!" title="Dropcaps"><span>Dropcaps</span></a></dd>
                                <dd><a href="#!" title="Columns"><span>Columns</span></a></dd>
                                <dd><a href="#!" title="Blockquote"><span>Blockquote</span></a></dd>
                                <dd><a href="#!" title="Highlights"><span>Highlights</span></a></dd>
                                <dd><a href="#!" title="Message Box"><span>Message Box</span></a></dd>
                                <dd><a href="#!" title="Social Icons"><span>Social Icons</span></a></dd>
                                <dd><a href="#!" title="Lists"><span>Lists</span></a></dd>
                                <dd><a href="#!" title="Separators"><span>Separators</span></a></dd>
                                <dd><a href="#!" title="Pricing Table"><span>Pricing Table</span></a></dd>
                              </dl>
                         </li>
                         </ul>   
                      </div>
                    </div>
                  </li>
                
                  <li className="col1356">
                    <a href="#!" className="main-btn" title="FEATURES">FEATURES</a>
                    <div className="sub sub6 sub1356">
                      <div className="sub-gap">
                         <ul>
                           <li>
                              <dl>
                                <dt><a href="#!" title="HEADER STYLES"><span>HEADER STYLES</span></a></dt>
                                <dd><a href="#!" title="Transparent Header"><span>Transparent Header</span></a></dd>
                                <dd><a href="#!" title="White Header"><span>White Header</span></a></dd>
                                <dd><a href="#!" title="Dark Header"><span>Dark Header</span></a></dd>
                                <dd><a href="#!" title="Header With Push"><span>Header With Push</span></a></dd>
                                <dd><a href="#!" title="Center Navigation"><span>Center Navigation</span></a></dd>
                                <dd><a href="#!" title="Center Logo"><span>Center Logo</span></a></dd>
                                <dd><a href="#!" title="Top Logo"><span>Top Logo</span></a></dd>
                                <dt><a href="#!" title="One Page Navigation"><span>One Page Navigation</span></a></dt>
                                <dd><a href="#!" title="Hamburger Menu"><span>Hamburger Menu</span></a></dd>
                                <dd><a href="#!" title="Hamburger Menu Half"><span>Hamburger Menu Half</span></a></dd>
                                <dd><a href="#!" title="Left Menu Classic"><span>Left Menu Classic</span></a></dd>
                                <dd><a href="#!" title="Left Menu Modern"><span>Left Menu Modern</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="FOOTER"><span>FOOTER</span></a></dt>
                                <dd><a href="#!" title="Footer Standard"><span>Footer Standard</span></a></dd>
                                <dd><a href="#!" title="Footer Standard Dark"><span>Footer Standard Dark</span></a></dd>
                                <dd><a href="#!" title="Footer Classic"><span>Footer Classic</span></a></dd>
                                <dd><a href="#!" title="Footer Classic Dark"><span>Footer Classic Dark</span></a></dd>
                                <dd><a href="#!" title="Footer Modern"><span>Footer Modern</span></a></dd>
                                <dd><a href="#!" title="Footer Modern Dark"><span>Footer Modern Dark</span></a></dd>
                                <dd><a href="#!" title="Footer Center Logo"><span>Footer Center Logo</span></a></dd>
                                <dd><a href="#!" title="Footer Center Logo Dark"><span>Footer Center Logo Dark</span></a></dd>
                                <dd><a href="#!" title="Footer Strip"><span>Footer Strip</span></a></dd>
                                <dd><a href="#!" title="Footer Strip Dark"><span>Footer Strip Dark</span></a></dd>
                                <dd><a href="#!" title="Footer Center Logo 02"><span>Footer Center Logo 02</span></a></dd>
                                <dd><a href="#!" title="Footer Center Logo 02 Dark"><span>Footer Center Logo 02 Dark</span></a></dd>
                                <dd><a href="#!" title="Footer Clean Modern Dark"><span className="sub-new">Footer Clean Modern Dark</span></a></dd>
                                <dd><a href="#!" title="Footer Clean Modern"><span className="sub-new">Footer Clean Modern</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="PAGE TITLE"><span>PAGE TITLE</span></a></dt>
                                <dd><a href="#!" title="Left Alignment"><span>Left Alignment</span></a></dd>
                                <dd><a href="#!" title="Right Alignment"><span>Right Alignment</span></a></dd>
                                <dd><a href="#!" title="Center Alignment"><span>Center Alignment</span></a></dd>
                                <dd><a href="#!" title="Dark Style"><span>Dark Style</span></a></dd>
                                <dd><a href="#!" title="Big Typography"><span>Big Typography</span></a></dd>
                                <dd><a href="#!" title="Parallax Image Background"><span>Parallax Image Background</span></a></dd>
                                <dd><a href="#!" title="Image After Breadcrumbs"><span>Image After Breadcrumbs</span></a></dd>
                                <dd><a href="#!" title="Gallery Background"><span>Gallery Background</span></a></dd>
                                <dd><a href="#!" title="Background Video"><span>Background Video</span></a></dd>
                                <dd><a href="#!" title="Mini Version"><span>Mini Version</span></a></dd>
                              </dl>
                           </li>
                           <li>
                              <dl>
                                <dt><a href="#!" title="GALLERY"><span>GALLERY</span></a></dt>
                                <dd><a href="#!" title="Single Image Lightbox"><span>Single Image Lightbox</span></a></dd>
                                <dd><a href="#!" title="Lightbox Galleryy"><span>Lightbox Gallery</span></a></dd>
                                <dd><a href="#!" title="Zoom Gallery"><span>Zoom Gallery</span></a></dd>
                                <dd><a href="#!" title="Metro Gallery"><span className="sub-new">Metro Gallery</span></a></dd>
                                <dd><a href="#!" title="Justified Gallery"><span className="sub-new">Justified Gallery</span></a></dd>
                                <dd><a href="#!" title="Popup With Form"><span>Popup With Form</span></a></dd>
                                <dd><a href="#!" title="Modal Popup"><span>Modal Popup</span></a></dd>
                                <dd><a href="#!" title="Open Youtube Video"><span>Open Youtube Video</span></a></dd>
                                <dd><a href="#!" title="Open Vimeo Video"><span>Open Vimeo Video</span></a></dd>
                                <dd><a href="#!" title="Open Google Map"><span>Open Google Map</span></a></dd>
                              </dl>
                         </li>
                         </ul>   
                      </div>
                    </div> 
                  </li>
                
                </ul>
              </nav>
  
              <aside id="aside">
                <span><i></i></span>
                <span><a href="#!" title="search"><i className="fa fa-search"></i></a></span>
                <span><i></i></span>
                <span><a href="#!" title="cart"><i className="fa fa-shopping-cart"></i></a></span>
              </aside>
  
            </div>
          </div>
        </div>
      </header>
    );
  };

  const MainComponent = () => {
    return (
      <main id='main'>
        <Section1Component/>
        <Section2Component/>
        <Section3Component/>
        <Section4Component/>
        <Section5Component/>
        <Section6Component/>
        <Section7Component/>
        <Section8Component/>
        <Section9Component/>
        <Section10Component/>
      </main>
    );
  };

    const Section1Component = () => {
      return (
        <section id='section1'>
          <div className="slide-container">
            <div className="slide-view">
              <ul className="slide-wrap">
                <li className="slide slide3">
                  <div className="caption">
                    <p>We are an design & development agency</p>
                    <h2>CRAFT ELEGANT SOLUTIONS</h2>
                    <span><a href="#!">Purchase Now</a></span>
                  </div>
                </li>
                <li className="slide slide1">
                  <div className="caption">
                    <p>we combine design, thinking and technical craft</p>
                    <h2>CRAFTING DIGITAL EXPERIENCES</h2>
                    <span><a href="#!">Purchase Now</a></span>
                  </div>
                </li>
                <li className="slide slide2">
                  <div className="caption">
                    <p>We are a design studio that believe in the ideas</p>
                    <h2>HIGHLY CREATIVE SOLUTIONS</h2>
                    <span><a href="#!">Purchase Now</a></span>
                  </div>
                </li>
                <li className="slide slide3">
                  <div className="caption">
                    <p>We are an design & development agency</p>
                    <h2>CRAFT ELEGANT SOLUTIONS</h2>
                    <span><a href="#!">Purchase Now</a></span>
                  </div>
                </li>
                <li className="slide slide1">
                  <div className="caption">
                    <p>we combine design, thinking and technical craft</p>
                    <h2>CRAFTING DIGITAL EXPERIENCES</h2>
                    <span><a href="#!">Purchase Now</a></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      );
    };

    const Section2Component = () => {
      return (
        <section id='section2'>
          <div className="container">
             <div className="gap">
               <div className="wrap">
                  <div className="title">
                    <h3>ABOUT DIGITAL AGENCY</h3>
                    <h2>
                      We always stay with our <strong>clients and respect</strong> their business. We<br />
                      deliver 100% and provide instant response to help them succeed in<br />
                      constantly changing and <strong>challenging business</strong>  world.
                    </h2>
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <div className="col-gap">
                          <div className="col-wrap">
                            <div className="top">
                              <img src="./images/sec2img01.jpg" alt="sec2" tabIndex="0" />
                            </div>
                            <div className="bottom">
                              <ul>
                                <li>
                                  <h3>Understand the situation</h3>
                                </li>
                                <li>
                                  <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                </li>
                                <li>
                                  <a href="#!" title='Explore services'><span>Explore services</span><i className="material-icons">arrow_forward</i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="col-gap">
                          <div className="col-wrap">
                            <div className="top">
                              <img src="./images/sec2img02.jpg" alt="sec2" tabIndex="0" />
                            </div>
                            <div className="bottom">
                              <ul>
                                <li>
                                  <h3>Bring the experience to life</h3>
                                </li>
                                <li>
                                  <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                </li>
                                <li>
                                  <a href="#!" title='Explore services'><span>Explore services</span><i className="material-icons">arrow_forward</i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="col-gap">
                          <div className="col-wrap">
                            <div className="top">
                              <img src="./images/sec2img03.jpg" alt="sec2" tabIndex="0" />
                            </div>
                            <div className="bottom">
                              <ul>
                                <li>
                                  <h3>Strategise chart the course</h3>
                                </li>
                                <li>
                                  <p>Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                                </li>
                                <li>
                                  <a href="#!" title='Explore services'><span>Explore services</span><i className="material-icons">arrow_forward</i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
               </div>
             </div>
           </div> 
        </section>
      );
    };

    const Section3Component = () => {
      return (
        <section id='section3'>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="title">
                  <h3>WHY CHOOSE US?</h3>
                  <h2>We are delivering beautiful<br /> digital products for you</h2>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <ul>
                            <li>
                              <span><i className="material-icons">tv</i></span>
                            </li>
                            <li>
                              <h4>Unique Design</h4>
                            </li>
                            <li>
                              <p>
                                Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <ul>
                            <li>
                              <span><i className="fa fa-pencil-square-o"></i></span>
                            </li>
                            <li>
                              <h4>Different Layout</h4>
                            </li>
                            <li>
                              <p>
                                Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <ul>
                            <li>
                              <span><i className="fa fa-connectdevelop"></i></span>
                            </li>
                            <li>
                              <h4>Portfolio Styles</h4>
                            </li>
                            <li>
                              <p>
                                Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <ul>
                            <li>
                              <span><i className="material-icons">laptop_mac</i></span>
                            </li>
                            <li>
                              <h4>WordPress Theme</h4>
                            </li>
                            <li>
                              <p>
                                Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    const Section4Component = () => {
      return (
        <section id='section4'>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <nav id="nav">
                  <ul>                
                    <li><a href="#!" className="gallery-btn" title='ALL'>ALL</a></li>
                    <li><a href="#!" className="gallery-btn" title='BROCHURE'>BROCHURE</a></li>
                    <li><a href="#!" className="gallery-btn" title='BRANDING'>BRANDING</a></li>
                    <li><a href="#!" className="gallery-btn" title='IDENTITY'>IDENTITY</a></li>
                    <li><a href="#!" className="gallery-btn" title='WEB'>WEB</a></li>
                    <li><a href="#!" className="gallery-btn" title='PHOTOGRAPHY'>PHOTOGRAPHY</a></li>
                  </ul>
                </nav>
                <div className="content">
                  <ul className="galley-wrap">
                    <li className="gallery-list">
                      <div className="img-wrap">
                        <figure>
                          <img src="./images/sec4img01.jpg" alt="sec4" />
                          <a href="#!" className="img-btn" title='Herbal Beauty Salon'>
                            <figcaption>
                                <span><i></i></span>
                                <h2>Herbal Beauty Salon</h2>
                                <h3>BRANDING AND IDENTITY</h3>
                            </figcaption>
                          </a>
                        </figure>                    
                      </div>
                    </li>
                    <li className="gallery-list">
                      <div className="img-wrap">
                        <figure>
                          <img src="./images/sec4img02.jpg" alt="sec4" />
                          <a href="#!" className="img-btn" title='Tailoring Interior'>
                            <figcaption>
                                <span><i></i></span>
                                <h2>Tailoring Interior</h2>
                                <h3>BRANDING AND BROCHURE</h3>
                            </figcaption>
                          </a>
                        </figure>                    
                      </div>
                    </li>
                    <li className="gallery-list">
                      <div className="img-wrap">
                        <figure>
                          <img src="./images/sec4img03.jpg" alt="sec4" />
                          <a href="#!" className="img-btn" title='Pixflow Studio'>
                            <figcaption>
                                <span><i></i></span>
                                <h2>Pixflow Studio</h2>
                                <h3>BRANDING AND IDENTITY</h3>
                            </figcaption>
                          </a>
                        </figure>                    
                      </div>
                    </li>
                    <li className="gallery-list">
                      <div className="img-wrap">
                        <figure>
                          <img src="./images/sec4img04.jpg" alt="sec4" />
                          <a href="#!" className="img-btn" title='Designblast Inc'>
                            <figcaption>
                                <span><i></i></span>
                                <h2>Designblast Inc</h2>
                                <h3>WEB AND PHOTOGRAPHY</h3>
                            </figcaption>
                          </a>
                        </figure>                    
                      </div>
                    </li>
                    <li className="gallery-list">
                      <div className="img-wrap">
                        <figure>
                          <img src="./images/sec4img05.jpg" alt="sec4" />
                          <a href="#!" className="img-btn" title='HardDot Stone'>
                            <figcaption>
                                <span><i></i></span>
                                <h2>HardDot Stone</h2>
                                <h3>BRANDING AND IDENTITY</h3>
                            </figcaption>
                          </a>
                        </figure>                    
                      </div>
                    </li>
                    <li className="gallery-list">
                      <div className="img-wrap">
                        <figure>
                          <img src="./images/sec4img06.jpg" alt="sec4" />
                          <a href="#!" className="img-btn" title='Educamp School'>
                            <figcaption>
                                <span><i></i></span>
                                <h2>Educamp School</h2>
                                <h3>BRANDING AND IDENTITY</h3>
                            </figcaption>
                          </a>
                        </figure>                    
                      </div>
                    </li>
                    <li className="gallery-list">
                      <div className="img-wrap">
                        <figure>
                          <img src="./images/sec4img07.jpg" alt="sec4" />
                          <a href="#!" className="img-btn" title='Branding and Identity'>
                            <figcaption>
                                <span><i></i></span>
                                <h2>Branding and Identity</h2>
                                <h3>BRANDING AND BROCHURE</h3>
                            </figcaption>
                          </a>
                        </figure>                    
                      </div>
                    </li>
                    <li className="gallery-list">
                      <div className="img-wrap">
                        <figure>
                          <img src="./images/sec4img08.jpg" alt="sec4" />
                            <a href="#!" className="img-btn" title='Violator Series'>
                              <figcaption>
                                  <span><i></i></span>
                                  <h2>Violator Series</h2>
                                  <h3>WEB AND PHOTOGRAPHY</h3>
                              </figcaption>
                            </a>
                        </figure>                    
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> 
          </div> 
        </section>
      );
    };

    const Section5Component = () => {
      return (
        <section id='section5'>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="content">
                  <ul className="svg-box">
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <span className="count-num">90%</span>
                          <svg viewBox='0 0 150 150' className="ring-back">
                            <circle cx='75' cy='75' r='74' strokeWidth='2px' stroke='#ddd' fill='transparent' />
                          </svg>
                          <svg viewBox='0 0 150 150' className="ring-front ring1">
                            <circle cx='75' cy='75' r='73.5' strokeWidth='3px' stroke='#555' fill='transparent' />
                          </svg>
                        </div>
                        <h2>GRAPHIC DESIGN</h2>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <span className="count-num">75%</span>
                          <svg viewBox='0 0 150 150' className="ring-back">
                            <circle cx='75' cy='75' r='74' strokeWidth='2px' stroke='#ddd' fill='transparent' />
                          </svg>                      
                          <svg viewBox='0 0 150 150' className="ring-front ring2">
                            <circle cx='75' cy='75' r='73.5' strokeWidth='3px' stroke='#555' fill='transparent' />
                          </svg>
                        </div>
                        <h2>WEB DESIGN</h2>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <span className="count-num">90%</span>
                          <svg viewBox='0 0 150 150' className="ring-back">
                            <circle cx='75' cy='75' r='74' strokeWidth='2px' stroke='#ddd' fill='transparent' />
                          </svg>                      
                          <svg viewBox='0 0 150 150' className="ring-front ring3">
                            <circle cx='75' cy='75' r='73.5' strokeWidth='3px' stroke='#555' fill='transparent' />
                          </svg>
                        </div>
                        <h2>BRANDING</h2>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <span className="count-num">62%</span>
                          <svg viewBox='0 0 150 150' className="ring-back">
                            <circle cx='75' cy='75' r='74' strokeWidth='2px' stroke='#ddd' fill='transparent' />
                          </svg>                      
                          <svg viewBox='0 0 150 150' className="ring-front ring4">
                            <circle cx='75' cy='75' r='73.5' strokeWidth='3px' stroke='#555' fill='transparent' />
                          </svg>
                        </div>
                        <h2>PHOTOGRAPHY</h2>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    const Section6Component = () => {
      return (
        <section id='section6'>
          <div className="container">
             <div className="gap">
               <div className="wrap">
                 <div className="content">
                   <ul>
                     <li>
                       <div className="col-gap">
                         <div className="col-wrap" tabIndex="0">
                           <img src="./images/sec6img01.jpg" alt="sec6" />
                           <div className="caption">
                              <ul>
                                <li><h3>Rubber Studio</h3></li>
                                <li><i></i></li>
                                <li><h2>A Rich Heritage &<br />Brand History</h2></li>
                                <li><a href="#!" title='View Case Study'>View Case Study</a></li>
                              </ul>
                           </div>
                         </div>
                       </div>
                     </li>
                     <li>
                       <div className="col-gap">
                         <div className="col-wrap" tabIndex="0">
                          <img src="./images/sec6img02.jpg" alt="sec6" />
                          <div className="caption">
                             <ul>
                               <li><h3>RedDot Media</h3></li>
                               <li><i></i></li>
                               <li><h2>Global Partners<br />Increases Revenue</h2></li>
                               <li><a href="#!" title='View Case Study'>View Case Study</a></li>
                             </ul>
                          </div>                       
                         </div>
                       </div>
                     </li>
                     <li>
                       <div className="col-gap">
                         <div className="col-wrap" tabIndex="0">
                          <img src="./images/sec6img03.jpg" alt="sec6" />
                          <div className="caption">
                             <ul>
                               <li><h3>Third Eye Glasses</h3></li>
                               <li><i></i></li>
                               <li><h2>Improves Sales<br />Efficiency with us</h2></li>
                               <li><a href="#!" title='View Case Study'>View Case Study</a></li>
                             </ul>
                          </div>                       
                         </div>
                       </div>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
        </section>
      );
    };

    const Section7Component = () => {
      return (
        <section id='section7'>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="title">
                  <h3>CREATIVE PEOPLE</h3>
                  <h2>Teamwork builds trust and th<br /> trust build growth</h2>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <div className="top">
                            <img src="./images/sec7img01.jpg" alt="sec7" />
                            <div className="top-up">
                              <ul>
                                <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text.</p></li>
                                <li><i></i></li>
                                <li>
                                  <span><a href="#!" title='facebook'><i className="fa fa-facebook-f"></i></a></span>
                                  <span><a href="#!" title='twitter'><i className="fa fa-twitter"></i></a></span>
                                  <span><a href="#!" title='google'><i className="fa fa-google-plus"></i></a></span>
                                  <span><a href="#!" title='instagram'><i className="fa fa-instagram"></i></a></span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="bottom">
                            <h4>HERMAN MILLER</h4>
                            <h5>CREATIVE DIRECTOR</h5>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <div className="top">
                            <img src="./images/sec7img02.jpg" alt="sec7" />
                            <div className="top-up">
                              <ul>
                                <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text.</p></li>
                                <li><i></i></li>
                                <li>
                                  <span><a href="#!" title='facebook'><i className="fa fa-facebook-f"></i></a></span>
                                  <span><a href="#!" title='twitter'><i className="fa fa-twitter"></i></a></span>
                                  <span><a href="#!" title='google'><i className="fa fa-google-plus"></i></a></span>
                                  <span><a href="#!" title='instagram'><i className="fa fa-instagram"></i></a></span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="bottom">
                            <h4>HERMAN MILLER</h4>
                            <h5>CREATIVE DIRECTOR</h5>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <div className="top">
                            <img src="./images/sec7img03.jpg" alt="sec7" />
                            <div className="top-up">
                              <ul>
                                <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text.</p></li>
                                <li><i></i></li>
                                <li>
                                  <span><a href="#!" title='facebook'><i className="fa fa-facebook-f"></i></a></span>
                                  <span><a href="#!" title='twitter'><i className="fa fa-twitter"></i></a></span>
                                  <span><a href="#!" title='google'><i className="fa fa-google-plus"></i></a></span>
                                  <span><a href="#!" title='instagram'><i className="fa fa-instagram"></i></a></span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="bottom">
                            <h4>HERMAN MILLER</h4>
                            <h5>CREATIVE DIRECTOR</h5>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <div className="top">
                            <img src="./images/sec7img04.jpg" alt="sec7" />
                            <div className="top-up">
                              <ul>
                                <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text.</p></li>
                                <li><i></i></li>
                                <li>
                                  <span><a href="#!" title='facebook'><i className="fa fa-facebook-f"></i></a></span>
                                  <span><a href="#!" title='twitter'><i className="fa fa-twitter"></i></a></span>
                                  <span><a href="#!" title='google'><i className="fa fa-google-plus"></i></a></span>
                                  <span><a href="#!" title='instagram'><i className="fa fa-instagram"></i></a></span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="bottom">
                            <h4>HERMAN MILLER</h4>
                            <h5>CREATIVE DIRECTOR</h5>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    const Section8Component = () => {
      return (
        <section id='section8'>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="content">
                  <ul>
                    <li>
                      <div className="img-box"><img src="./images/sec8.jpg" alt="sec8" /></div>
                    </li>
                    <li>
                      <ul>
                        <li><h3>We create premium designs and technology.</h3></li>
                        <li><h2>A digital studio crafting beautiful experiences.</h2></li>
                        <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum has been the industry.</p></li>
                        <li><a href="#!" title='Start Your Business'>Start Your Business</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    const Section9Component = () => {
      return (
        <section id='section9'>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="title">
                  <h3>LATEST BLOGS</h3>
                  <h2>Publish what you think, don't<br /> put it on social media</h2>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <div className="top">
                            <a href="#!" title='blog'><img src="./images/sec9img01.jpg" alt="sec9" /></a>
                          </div>
                          <div className="bottom">
                            <ul>
                              <li><span>20 APRIL 2016</span><span>|</span><span>BY <a href="#!" title='JAY BENJAMIN'>JAY BENJAMIN</a></span></li>
                              <li><h4><a href="#!" title='content'>I like the body. I like to design everything to do with the body.</a></h4></li>
                              <li><i></i></li>
                              <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <div className="top">
                            <a href="#!" title='blog'><img src="./images/sec9img02.jpg" alt="sec9" /></a>
                          </div>
                          <div className="bottom">
                            <ul>
                              <li><span>25 APRIL 2016</span><span>|</span><span>BY <a href="#!" title='JAY BENJAMIN'>JAY BENJAMIN</a></span></li>
                              <li><h4><a href="#!" title='content'>Styles come and go. design is a language, not a style.</a></h4></li>
                              <li><i></i></li>
                              <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <div className="top">
                            <a href="#!" title='blog'><img src="./images/sec9img03.jpg" alt="sec9" /></a>
                          </div>
                          <div className="bottom">
                            <ul>
                              <li><span>15 MARCH 2016</span><span>|</span><span>BY <a href="#!" title='JAY BENJAMIN'>JAY BENJAMIN</a></span></li>
                              <li><h4><a href="#!" title='content'>Recognizing the need is the primary condition for design.</a></h4></li>
                              <li><i></i></li>
                              <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap" tabIndex="0">
                          <div className="top">
                            <a href="#!" title='blog'><img src="./images/sec9img04.jpg" alt="sec9" /></a>
                          </div>
                          <div className="bottom">
                            <ul>
                              <li><span>10 MARCH 2016</span><span>|</span><span>BY <a href="#!" title='JAY BENJAMIN'>JAY BENJAMIN</a></span></li>
                              <li><h4><a href="#!" title='content'>Get in over your head as often and as joyfully as possible.</a></h4></li>
                              <li><i></i></li>
                              <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    const Section10Component = () => {

      const [report, setReport] = React.useState({nameVal: '', emailVal: '', emailCon: false});

      const onChangeName=(e)=>{
        const regExp = /[^A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ\s]/g;
        let tem = '';
    
        tem = e.target.value.toString().replace(regExp,'');
    
        setReport({...report, nameVal: tem});
      }

      const onChangeEmail=(e)=>{
        const regExp = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*.[A-Za-z]{2,3}$/;
        let tem = '';
    
        if(regExp.test(e.target.value)){
          tem = true;
        }
        else{
          tem = false;
        }
        setReport({...report, emailVal: e.target.value, emailCon: tem});
      }

      const onSubmitcontact=(e)=>{
        e.preventDefault();
    
        const {nameVal, emailVal, emailCon} = report;
    
        if(nameVal==='' || emailVal===''||emailCon===false){
          if(nameVal===''){
            alert('이름을 입력해 주세요.');
          }
          else if(emailVal===''){
            alert('이메일을 입력해 주세요.');
          }
          else if (emailCon===false){
            alert('잘못된 이메일 형식입니다.')
          }
        }
        else {
              
          let formData = new FormData();
            
          formData.append('nameData', nameVal);
          formData.append('emailData', emailVal);
          formData.append('dateData', `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`);
    
          axios({
            url: './mysql/response.php',
            method: 'POST',
            data:  formData
          })
          .then((response)=>{
            console.log(`AXIOS 성공, ${response}`);
            alert('전송이 완료되었습니다.');
            setReport({...report, nameVal: '', emailVal: ''});
          })
          .catch((error)=>{
            console.log(`AXIOS 실패, ${error}`);
          });
        }
      }
      return (
        <section id='section10'>
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <div className="title">
                  <h2>CONTACT US</h2>
                  <h3>Unlimited power and customization possibilities?</h3>
                </div>
                <div className="content">
                  <form onSubmit={onSubmitcontact} autoComplete="off" method="POST" name="submitForm" id="submitForm">
                    <ul>
                      <li><input onChange={onChangeName} type="text" name="name" id="name" placeholder="Name" value={report.nameVal} /></li>
                      <li><input onChange={onChangeEmail} type="email" name="email" id="email" placeholder="Email" value={report.emailVal} /></li>
                      <li>
                          <button type="submit" className="submit-btn">SUBMIT</button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>  
            </div>  
          </div>  
        </section>
      );
    };

  const FooterComponent = () => {
    return (
      <footer id='footer'>
        <div className="container">
          <div className="gap">
            <div className="wrap">
              <div className="content">
                <div className="top">
                  <ul>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <h2>London Based<br /> Creative Studio</h2>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <address>
                            301 The Greenhouse,<br />
                            Custard Factory, London, E2 8DY.<br />
                            <a href="mailto:damdadodam_@naver.com" title="damdadodam_@naver.com">damdadodam_@naver.com</a> | +82 (0) <a href="tel:010-0000-0000" title="010-0000-0000">010-0000-0000</a>
                          </address>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <h1><img src="./images/logo_footer.png" alt="Logo" /></h1>
                          <p>
                            <span><a href="#!" title='TWITTER'>TWITTER</a></span>
                            <span><a href="#!" title='FACEBOOK'>FACEBOOK</a></span>
                            <span><a href="#!" title='INSTAGRAM'>INSTAGRAM</a></span>
                            <span><a href="#!" title='DRIBBBLE'>DRIBBBLE</a></span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
  
                <div className="bottom">
                  <ul>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <h3>DOPOFO - Portfolio Concept Theme</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-gap">
                        <div className="col-wrap">
                          <p>&copy; 2022 DOPOFO is Proudly Powered by <a href="https://www.themezaa.com/" title="ThemeZaa">ThemeZaa</a></p>
                        </div>
                      </div>
                    </li>                
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  const GoToTopComponent = () => {
    return (
      <div id='goTopTop'>
        <a href="#!" className="go-to-top-btn" title='top'><i className="material-icons">arrow_upward</i></a>
      </div>
    );
  };

  const QuickComponent = () => {
    return (
      <div id='quick'>
        <div>
          <a href="#!" title='Buy Theme'><i className="fa fa-shopping-cart"></i><span>Buy Theme</span></a>
        </div>
        <div>
          <a href="#!" title='Quick Question?'><i className="material-icons">email</i><span>Quick Question?</span></a>
        </div>
      </div>
    );
  };

ReactDOM.render(
  <>
  <SkipComponent/>,
  <WrapComponent/>
  </>,
  document.getElementById('root')
);