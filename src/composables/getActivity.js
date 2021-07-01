import { ref } from "@vue/reactivity";
import axios from "axios";

const getActivity = () => {
  const activity = ref(null);
  const loading = ref(null);
  const error = ref(null);
  const count = ref(0);

  const loadActivity = async () => {
    loading.value = true;
    count.value++;
    if (count.value <= 50) {
      try {
        const res = await axios.request("https://www.boredapi.com/api/activity");
        activity.value = res.data;
      } catch (error) {
        error.value = error;
      } finally {
        loading.value = false;
      }
    }
  };
  return { activity, getActivity, loading, error, count, loadActivity };
};

export default getActivity;
