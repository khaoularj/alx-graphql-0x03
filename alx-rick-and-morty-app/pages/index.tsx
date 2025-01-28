import { useQuery } from "@apollo/client"
import { GET_EPISODES } from "@/graphql/queries"
import { EpisodeProps } from "@/interfaces"
import EpisodeCard from "@/components/common/EpisodeCard"
import { useEffect, useState } from "react"
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';



const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Home