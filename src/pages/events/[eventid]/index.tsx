import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventData } from '@/components/Redux/eventSlice';
import { RootState, AppDispatch } from '@/components/Redux/store';
import EventsBanner from '@/components/EventsBanner/EventsBanner';
import Description from '@/components/Description/description';
import { SponsorMarquee } from '@/components/Marquee/marquee';
import SEOComponent from '@/components/SEOComponent/SEOComponent';
import { Event } from '@/components/Redux/types';  // Import Event type

const Events: React.FC = () => {
  const router = useRouter();
  const { eventid } = router.query; // get eventId from router query 
  const dispatch = useDispatch<AppDispatch>();
  const eventData = useSelector((state: RootState) => state.event.eventData);
  const loading = useSelector((state: RootState) => state.event.loading);
  const error = useSelector((state: RootState) => state.event.error);

  useEffect(() => {
    if (eventid && typeof eventid === 'string') {
      dispatch(fetchEventData(eventid));
    }
  }, [dispatch, eventid]);

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
