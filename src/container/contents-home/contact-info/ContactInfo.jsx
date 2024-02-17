import React from "react";
import { contactInfos } from "../../../constants";
import Wrapper from "../../../components/wrapper";

export default function ContactInfo() {
  return (
    <div className="w-full pt-2 bg-gray-200 text-base">
      <Wrapper>
        <div
          className="grid grid-cols-4 gap-4 text-center font-['Open_Serif']
            h-44 place-content-center"
        >
          {contactInfos.map((contact, i) => {
            return (
              <div key={i}>
                <h1 className="font-semibold text-xl">{contact.title}</h1>
                <p>{contact.description}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
