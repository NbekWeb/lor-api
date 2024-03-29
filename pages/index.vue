<template>
  <div>
    <client-only>
      <div class="w-full h-auto bg-back">
        <div class="bg-light-grey">
          <div class="container mx-auto">
            <TopContact />
          </div>
        </div>
        <div class="container mx-auto">
          <HeadVue :title="staticInfo?.title" />
          <Servise :servises="servises" />
          <div class="w-full px-28 max-md:px-0">
            <Contact class="mt-28 max-md:mt-16" />
          </div>
          <AboutUs class="mt-28 max-md:mt-16" />
          <Doctors />
          <Certificate :certificates="certificates" />
          <Comments :reviews="reviews" />
          <Consultation :staticInfo="staticInfo" />
        </div>
        <Foot :staticInfo="staticInfo" />
      </div>
    </client-only>
  </div>
</template>
<script>
import axios from "axios";

export default {
  async asyncData() {
    try {
      const url = process.env.BASE_URL;
      const certificatesResponse = await axios.get(`${url}/api/certificates`);
      const servicesResponse = await axios.get(`${url}/api/services`);
      const reviewsResponse = await axios.get(`${url}/api/reviews`);
      const staticInfoResponse = await axios.get(`${url}/api/static_infos`);

      return {
        certificates: certificatesResponse.data?.results || [],
        servises: servicesResponse.data?.results || [],
        reviews: reviewsResponse.data?.results || [],
        staticInfo: staticInfoResponse.data || {},
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        certificates: [],
        servises: [],
        reviews: [],
        staticInfo: {},
      };
    }
  },
};
</script>
<style lang=""></style>
