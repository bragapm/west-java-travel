import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { NavigationDropDownButton } from "../../components/custom-component/FieldComponent/NavigationDropDownButton";
import { WhereToGoDemografiSection } from "../../components/where-to-go-section/WhereToGoDemografiSection";
import { HomeSectionTitle } from "../../components/custom-component/TextComponent/HomeSectionTitle";
import { useEffect, useRef, useState } from "react";
import { WhereToGoDestinantionSection } from "../../components/where-to-go-section/where-to-go-detination-section/WhereToGoDestinantionSection";
import { WhereToGoInFrameSection } from "../../components/where-to-go-section/WhereToGoInFrameSection";
import { WhereToGoIdeasSection } from "../../components/where-to-go-section/WhereToGoIdeasSection";
import { useRouter } from "next/dist/client/router";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { westJavaRegion: "southern west java" } },
      { params: { westJavaRegion: "central west java" } },
      { params: { westJavaRegion: "northern west java" } },
      { params: { westJavaRegion: "western west java" } },
      { params: { westJavaRegion: "eastern west java" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { region: params.westJavaRegion },
  };
}

export default function WhereToGo({ region }) {
  const thumbnailRef = useRef();
  const demografiSectionRef = useRef();
  const destinationSectionRef = useRef();
  const inFrameSectionRef = useRef();
  const tripIdeasSectionRef = useRef();
  const [activeSection, setactiveSection] = useState("thumbnail");

  const router = useRouter();
  // const region = router.query.westJavaRegion;
  const regionId =
    region == "central west java"
      ? 5
      : region == "southern west java"
      ? 1
      : region == "eastern west java"
      ? 2
      : region == "western west java"
      ? 3
      : 4;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setactiveSection(entry.target.id);
      }
    }, options);

    if (thumbnailRef && thumbnailRef.current) {
      observer.observe(thumbnailRef.current);
    }
    if (demografiSectionRef && demografiSectionRef.current) {
      observer.observe(demografiSectionRef.current);
    }
    if (destinationSectionRef && destinationSectionRef.current) {
      observer.observe(destinationSectionRef.current);
    }
    if (inFrameSectionRef && inFrameSectionRef.current) {
      observer.observe(inFrameSectionRef.current);
    }
    if (tripIdeasSectionRef && tripIdeasSectionRef.current) {
      observer.observe(tripIdeasSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='smooth-scroll'>
      <Navbar activePage={router.query.westJavaRegion} />
      <div
        className={`fixed px-20 py-8 gap-x-16 top-[5.4rem] left-0 right-0 z-30 bg-white shadow-lg border-t border-bordercolor w-full h-10 ${
          activeSection == "destination-section" ||
          activeSection == "in-frame-section" ||
          activeSection == "trip-ideas-section"
            ? "md:flex hidden md:opacity-100 opacity-0"
            : "hidden opacity-0"
        } transition-all duration-300`}
      >
        <a
          href='#demografi-section'
          className='font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'
        >
          01
          <span className='font-karla text-neutral font-normal ml-5'>
            Demografi
          </span>
        </a>
        <a
          href='#destination-section'
          className={`font-montserrat ${
            activeSection == "destination-section"
              ? "text-dark text-opacity-50"
              : "text-neutral text-opacity-40"
          } transition-all font-bold text-xl flex flex-row items-center`}
        >
          02
          <span
            className={`font-karla text-neutral ${
              activeSection == "destination-section"
                ? "font-bold"
                : "font-normal"
            } transition-all ml-5`}
          >
            Destinasi & Atraksi
          </span>
        </a>
        <a
          href='#in-frame-section'
          className={`font-montserrat ${
            activeSection == "in-frame-section"
              ? "text-dark text-opacity-50"
              : "text-neutral text-opacity-40"
          } transition-all font-bold text-xl flex flex-row items-center`}
        >
          03
          <span
            className={`font-karla text-neutral ${
              activeSection == "in-frame-section" ? "font-bold" : "font-normal"
            } transition-all ml-5`}
          >
            Southern West Java In Frame
          </span>
        </a>
        <a
          href='#trip-ideas-section'
          className={`font-montserrat ${
            activeSection == "trip-ideas-section"
              ? "text-dark text-opacity-50"
              : "text-neutral text-opacity-40"
          } transition-all font-bold text-xl flex flex-row items-center`}
        >
          04
          <span
            className={`font-karla text-neutral ${
              activeSection == "trip-ideas-section"
                ? "font-bold"
                : "font-normal"
            } transition-all ml-5`}
          >
            Trip Ideas
          </span>
        </a>
      </div>
      <div className='pt-20 md:pt-36' id='thumbnail'>
        <div className='w-full overflow-hidden md:px-[7.5rem]'>
          <img
            src={
              regionId == 1
                ? "/img-home-southern.jpg"
                : regionId == 2
                ? "/img-home-eastern.jpg"
                : regionId == 3
                ? "/img-home-western.jpg"
                : regionId == 5
                ? "/img-home-central.jpg"
                : "/img-home-mountain.jpg"
            }
            className='w-full h-[157px] md:h-[515px] object-cover md:rounded-3xl'
          />
        </div>
      </div>
      <div className='flex flex-row items-start'>
        <div className='pt-10 px-5 md:px-20 md:w-8/12 md:-translate-y-24 md:bg-white md:rounded-tr-[1.875rem]'>
          <HomeSectionTitle title='where to go' />
          <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-5 md:pl-9 md:leading-tight z-10 capitalize'>
            {region}
          </h3>
          <p className='font-karla text-sm md:text-base text-neutral mt-4 md:pl-9 md:mt-5'>
            White Crater, The Magical Splendor and Hypnotizing Ambience of a
            Crater
          </p>
          <div className='flex flex-col md:flex-row mt-8 space-y-6 md:space-y-0 md:space-x-10 md:pl-9'>
            <div className='flex flex-row'>
              <img
                src='/ic-destination.svg'
                alt='ic-destination'
                className='mr-4'
              />
              <div className='flex flex-col'>
                <h4 className='font-montserrat text-dark md:text-lg font-bold'>
                  30
                </h4>
                <p className='uppercase font-karla font-bold text-neutral opacity-50 text-xs md:text-base'>
                  Destination
                </p>
              </div>
            </div>
            <div className='flex flex-row'>
              <img
                src='/ic-restaurant.svg'
                alt='ic-restaurant'
                className='mr-4'
              />
              <div className='flex flex-col'>
                <h4 className='font-montserrat text-dark md:text-lg font-bold'>
                  76
                </h4>
                <p className='uppercase font-karla font-bold text-neutral opacity-50 text-xs md:text-base'>
                  Restaurant
                </p>
              </div>
            </div>
            <div className='flex flex-row'>
              <img src='/ic-bed.svg' alt='ic-bed' className='mr-4' />
              <div className='flex flex-col'>
                <h4 className='font-montserrat text-dark md:text-lg font-bold'>
                  14
                </h4>
                <p className='uppercase font-karla font-bold text-neutral opacity-50 text-xs md:text-base'>
                  accomodation
                </p>
              </div>
            </div>
          </div>
          <div className='w-full h-px bg-bordercolor mt-8 mb-8 md:mb-0 md:ml-9' />
          <NavigationDropDownButton
            className='md:hidden'
            options={[
              { label: "Demografi", href: "#demografi-section" },
              { label: "Destinasi & Atraksi", href: "#destination-section" },
              {
                label: "Southern West Java In Frame",
                href: "#in-frame-section",
              },
              { label: "Trip Ideas", href: "#trip-ideas-section" },
            ]}
          />
          <WhereToGoDemografiSection
            demografiSectionRef={demografiSectionRef}
          />
        </div>
        <div className='hidden md:flex flex-row items-center sticky top-0 pb-32 w-4/12 justify-center pr-20 pt-28'>
          <div className='w-[5px] h-[252px] bg-[#CBD9EA] mr-10 rounded-full'>
            <div className='w-[5px] h-[36px] bg-primary rounded-full mt-16'></div>
          </div>
          <div className='flex flex-col'>
            <h4 className='capitalize font-montserrat font-bold text-dark text-xl pb-5'>
              Lompat ke menu
            </h4>
            <a
              href='#demografi-section'
              className='pb-5 font-montserrat text-dark text-opacity-50 font-bold text-xl flex flex-row items-center'
            >
              01
              <span className='font-karla text-neutral ml-5'>Demografi</span>
            </a>
            <a
              href='#destination-section'
              className='pb-5 font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'
            >
              02
              <span className='font-karla text-neutral font-normal ml-5'>
                Destinasi & Atraksi
              </span>
            </a>
            <a
              href='#in-frame-section'
              className='pb-5 font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'
            >
              03
              <span className='font-karla text-neutral font-normal ml-5'>
                Southern West Java In Frame
              </span>
            </a>
            <a
              href='#trip-ideas-section'
              className='font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'
            >
              04
              <span className='font-karla text-neutral font-normal ml-5'>
                Trip Ideas
              </span>
            </a>
          </div>
        </div>
      </div>
      <WhereToGoDestinantionSection
        destinationSectionRef={destinationSectionRef}
        region={region}
        regionId={regionId}
      />
      <WhereToGoInFrameSection
        inFrameSectionRef={inFrameSectionRef}
        regionId={regionId}
      />
      <WhereToGoIdeasSection tripIdeasSectionRef={tripIdeasSectionRef} />
      <Footer />
    </div>
  );
}
