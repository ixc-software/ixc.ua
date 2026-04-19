import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

const clients = [
  {
    "name": "Kyivstar",
    "url": "https://kyivstar.ua/"
  },
  {
    "name": "4carriers",
    "url": "https://www.4carriers.pl"
  },
  {
    "name": "Alizeetelecom",
    "url": "https://www.alizeetelecom.com"
  },
  {
    "name": "Alltimetelecom",
    "url": "https://www.alltimetelecom.net"
  },
  {
    "name": "Aqwaretel",
    "url": "https://www.aqwaretel.com"
  },
  {
    "name": "Arandatelecoms",
    "url": "https://www.arandatelecoms.com"
  },
  {
    "name": "ASK-VoIP",
    "url": "http://www.ask-voip.com/"
  },
  {
    "name": "Bigetelecom",
    "url": "https://bigetelecom.com/"
  },
  {
    "name": "Cronomax",
    "url": "https://www.cronomax.net"
  },
  {
    "name": "Dialtel",
    "url": "https://www.dialtel.net"
  },
  {
    "name": "Ecosmob",
    "url": "https://www.ecosmob.com"
  },
  {
    "name": "EON Telecom",
    "url": "https://eontelecom.com/"
  },
  {
    "name": "Filasco",
    "url": "https://www.filasco.net"
  },
  {
    "name": "Firstcarrier",
    "url": "https://www.firstcarrier.com"
  },
  {
    "name": "Global Rap Calling",
    "url": "https://voip.globalrap.net/"
  },
  {
    "name": "Hetzner",
    "url": "https://www.hetzner.com"
  },
  {
    "name": "Invescotel",
    "url": "https://www.invescotel.com"
  },
  {
    "name": "Ipconnex",
    "url": "https://www.ipconnex.com"
  },
  {
    "name": "IPTelecom",
    "url": "https://www.iptelecom.asia/"
  },
  {
    "name": "Iptelin",
    "url": "https://www.iptelin.net"
  },
  {
    "name": "Ixcglobal",
    "url": "https://www.ixcglobal.com"
  },
  {
    "name": "Jotelecom",
    "url": "https://www.jotelecom.com"
  },
  {
    "name": "Jstel",
    "url": "https://www.jstel.cz"
  },
  {
    "name": "K4Tel",
    "url": "https://k4tel.com/"
  },
  {
    "name": "KazNetCom",
    "url": "https://www.kaznetcom.kz/"
  },
  {
    "name": "Knxcomm",
    "url": "https://www.knxcomm.net"
  },
  {
    "name": "Malaktel",
    "url": "https://www.malaktel.com"
  },
  {
    "name": "Mediafon Group",
    "url": "https://www.mediafon.com/"
  },
  {
    "name": "Netpluz",
    "url": "https://www.netpluz.asia"
  },
  {
    "name": "Nextcarrier",
    "url": "https://www.nextcarrier.net"
  },
  {
    "name": "Ngncorp",
    "url": "https://www.ngncorp.com"
  },
  {
    "name": "O3",
    "url": "https://www.o3.ua"
  },
  {
    "name": "Phontel Networks",
    "url": "https://www.phontel.net/"
  },
  {
    "name": "Prolinkslb",
    "url": "https://www.prolinkslb.com"
  },
  {
    "name": "Q-berry",
    "url": "https://www.q-berry.com"
  },
  {
    "name": "Qatama",
    "url": "https://www.qatama.com"
  },
  {
    "name": "Redplanetglobal",
    "url": "https://www.redplanetglobal.com"
  },
  {
    "name": "Rteedge",
    "url": "https://www.rteedge.com"
  },
  {
    "name": "Saharagroup",
    "url": "https://www.saharagroup.co.uk"
  },
  {
    "name": "Satas",
    "url": "https://www.satas.co.ke"
  },
  {
    "name": "Savytel",
    "url": "https://www.savytel.com"
  },
  {
    "name": "Servicebox",
    "url": "https://www.servicebox.ge"
  },
  {
    "name": "Sg",
    "url": "https://www.sg.gs"
  },
  {
    "name": "Stc",
    "url": "https://www.stc.com.kw"
  },
  {
    "name": "Swiftel",
    "url": "https://www.swiftel.net/"
  },
  {
    "name": "Syntegoits",
    "url": "https://www.syntegoits.com"
  },
  {
    "name": "Teknotelltd",
    "url": "https://www.teknotelltd.com"
  },
  {
    "name": "TeleFusion",
    "url": "https://www.telefusion.de/"
  },
  {
    "name": "Telefusionnetwork",
    "url": "https://www.telefusionnetwork.com"
  },
  {
    "name": "Telesense",
    "url": "https://www.telesenseglobal.com/"
  },
  {
    "name": "Terminium",
    "url": "https://www.terminium.co"
  },
  {
    "name": "Termsat",
    "url": "https://www.termsat.com"
  },
  {
    "name": "Tlynx",
    "url": "https://www.tlynx.co.uk"
  },
  {
    "name": "Unibuilders",
    "url": "https://www.unibuilders.com"
  },
  {
    "name": "Userbasicsoftware",
    "url": "https://www.userbasicsoftware.com"
  },
  {
    "name": "Voicekings",
    "url": "https://www.voicekings.co.uk"
  },
  {
    "name": "Vozcodex",
    "url": "https://www.vozcodex.com"
  },
  {
    "name": "Zetta Telecom",
    "url": "https://zettatelecom.com/"
  },
  {
    "name": "Zeust",
    "url": "https://www.zeust.net"
  },
  {
    "name": "Zxeer",
    "url": "https://www.zxeer.com"
  }
];

export const Hero: React.FC = () => {
  return (
    <>
      <section className="hero container animate-fade-in">
        <h1>High Performance All-In-One Solution for VoIP Business</h1>
        <p>
          Experience carrier-grade reliability with IXC Softswitch. Our platform provides everything you need to manage routing, billing, SMS, and monitoring securely and efficiently.
        </p>
        <div className="hero-actions">
          <a href="#products" className="btn btn-primary">
            Explore Products <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Sales <PhoneCall size={18} />
          </a>
        </div>
      </section>

      <section className="trust-banner">
        <div className="container" style={{ width: '100%', padding: '0' }}>
          <div className="trust-stats">
            <h3>Building Trust Since <strong>1999</strong></h3>
            <p>Handling <strong>272</strong> clients globally in the wholesale VoIP business.</p>
          </div>
          
          <div className="marquee-wrapper">
            <div className="marquee-container">
              {/* Double array for seamless infinite scrolling */}
              {[...clients, ...clients].map((client, i) => (
                <a key={i} href={client.url} target="_blank" rel="noopener noreferrer" className="marquee-item">
                  {client.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
