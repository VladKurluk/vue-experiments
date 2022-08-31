<template>
  <div></div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      //   `https://api.openweathermap.org/data/3.0/onecall?lat=${route.query.lat}&lon=${route.query.lng}&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}&units=imperial`
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${route.query.lat}&lon=${route.query.lng}&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}&lang=ru`
      `https://api.openweathermap.org/data/2.5/forecast?lat=${route.query.lat}&lon=${route.query.lng}&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}&units=imperial&lang=ru`
    );

    return weatherData.data;
  } catch (error) {
    console.log(error);
  }
};
// eslint-disable-next-line no-unused-vars
const weatherData = await getWeatherData();
</script>
