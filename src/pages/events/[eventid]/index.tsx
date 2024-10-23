import Description from '@/components/Description/description';
import EventsBanner from '@/components/EventsBanner/EventsBanner';
import { SponsorMarquee } from '@/components/Marquee/marquee';
import { fetchEventData } from '@/components/Redux/eventSlice';
import { AppDispatch, RootState } from '@/components/Redux/store';
import SEOComponent from '@/components/SEOComponent/SEOComponent';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Events: React.FC = () => {
  const router = useRouter();
  const { eventid } = router.query; // get eventId from router query 
  const dispatch = useDispatch<AppDispatch>();
  // const eventData = useSelector((state: RootState) => state.event.eventData);
  const loading = useSelector((state: RootState) => state.event.loading);
  const error = useSelector((state: RootState) => state.event.error);
  interface EventData {
    longDesc: string;
    eventName: string;
    logo: string;
  }

  const [eventData, setEventData] = useState<EventData | null>(null);

  const fetchEventDataById = async () => {
    try {
      const response = await axios.get(`https://api.sinusoid.in/events/${eventid}`);
      // setEventData(response?.data)
      // console.log("Event Data Received")
      return (response.data);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  }

  useEffect(() => {
    if (eventid && typeof eventid === 'string') {
      fetchEventDataById().then(data => setEventData(data));
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
        <div>Error loading event data: {error}</div>
      ) : (
        <>
          <EventsBanner />
          <Description eventId={eventid as string} />
          <SponsorMarquee />
        </>
      )}
    </>
  );
};

export default Events;
