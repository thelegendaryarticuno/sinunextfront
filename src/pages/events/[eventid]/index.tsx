import Description from '@/components/Description/description';
import EventsBanner from '@/components/EventsBanner/EventsBanner';
import { SponsorMarquee } from '@/components/Marquee/marquee';
import SEOComponent from '@/components/SEOComponent/SEOComponent';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Events: React.FC = () => {
  const router = useRouter();
  const { eventid } = router.query;
  interface EventData {
    longDesc: string;
    eventName: string;
    eventTagline: string;
    schedule: {
      eventStart: string;
      eventEnd: string;
      registrationStart?: string;
      submissionStart?: string;
      submissionEnd?: string;
    };
    imageAsset: {
      eventBannerComponent: {
        imgUrl: string;
      };
    };
    logo: string;
    status: string;
    eventMode: string;
    eventRedirectUrl?: string;
    eventId: string;
    rules?: string[];
    prizes?: string[];
    eventStructure?: string[];
  }

  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEventDataById = async () => {
    try {
      const response = await axios.get(`https://api.sinusoid.in/events/${eventid}`);
      setEventData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching event data:', error);
      setError('Error loading event data.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (eventid && typeof eventid === 'string') {
      fetchEventDataById();
    }
  }, [eventid]);

  return (
    <>
      <SEOComponent
        PageDescription={eventData?.longDesc || 'Default description'}
        PageKeywords={['sinusoid', 'techfest', eventData?.eventName || '']}
        PageOGLImage={eventData?.logo || '/logo/logo.png'}
        PageTitle={`${eventData?.eventName} | siNUsoid v8` || 'Event Title'}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          {eventData && <EventsBanner eventData={eventData} />}
          {eventData && <Description eventData={eventData} />}
          <SponsorMarquee />
        </>
      )}
    </>
  );
};

export default Events;
