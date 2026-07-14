"use client";

import Link from "next/link";
import { useState } from "react";
import { serviceItems } from "@/components/services/services-data";
import "./services-page.css";

export default function ServicesTabs() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:snap-none sm:gap-3 lg:flex-nowrap lg:justify-between lg:gap-4"
        role="tablist"
        aria-label="Hizmet seçimi"
      >
        {serviceItems.map((service, index) => (
          <button
            key={service.slug}
            type="button"
            role="tab"
            id={`service-tab-${service.slug}`}
            aria-controls={`service-panel-${service.slug}`}
            aria-selected={activeService === index}
            onClick={() => setActiveService(index)}
            className={`site-btn-tab shrink-0 snap-start min-w-[42%] max-w-[70%] sm:min-w-0 sm:max-w-none sm:w-[calc(33.333%-0.5rem)] lg:w-auto lg:flex-1 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm lg:text-base leading-snug lg:px-6 ${
              activeService === index ? "site-btn-tab--active" : ""
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className="relative lg:min-h-[320px]">
        {serviceItems.map((service, index) => {
          const IconComponent = service.icon;
          const isActive = activeService === index;

          return (
            <div
              key={service.slug}
              id={`service-panel-${service.slug}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${service.slug}`}
              hidden={!isActive}
              className={isActive ? "relative lg:absolute lg:inset-0" : "hidden lg:block lg:absolute lg:inset-0"}
            >
              <div className="site-card service-panel overflow-hidden rounded-lg p-4 sm:p-6 lg:p-7 h-full">
                <div className="service-panel__grid grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 h-full min-h-0">
                  <div className="relative flex min-h-0 flex-col justify-center overflow-hidden lg:col-span-3">
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden"
                      aria-hidden="true"
                    >
                      <IconComponent className="service-panel__icon text-orange shrink-0" />
                    </div>

                    <div className="relative z-10 min-w-0 pr-0 lg:pr-4">
                      <p className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-white mb-2 sm:mb-3">
                        {service.title}
                      </p>
                      <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <Link
                        href={`/hizmetler/${service.slug}/`}
                        className="site-btn-ghost inline-flex text-sm"
                      >
                        Detaylı bilgi →
                      </Link>
                    </div>
                  </div>

                  <div className="flex min-h-0 flex-col justify-center gap-2.5 sm:gap-3 lg:col-span-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="service-panel__feature p-3.5 sm:p-4">
                        <p className="text-muted-secondary text-sm sm:text-base font-medium flex items-center gap-2.5 min-w-0">
                          <span className="text-orange shrink-0 text-lg leading-none" aria-hidden="true">
                            •
                          </span>
                          <span className="min-w-0 break-words">{feature}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
