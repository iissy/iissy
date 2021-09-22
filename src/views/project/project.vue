<script>
import http from "../../utils/http";
import router from '../../router';

export default {
  data() {
    return {
    }
  },
  mounted() {
    let self = this;
    let team = self.$route.params.team;
    let project = self.$route.params.project;
    http.get(self.urls.project_first_component.format(team, project)).then(function (response) {
      router.push({ name:'Component', params: { team: team, project: project, com: response.data.uuid } });
    });
  }
}
</script>