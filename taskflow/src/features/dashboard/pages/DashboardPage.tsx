import Container from "../../../components/ui/container/Container";
import StatCard from "../../../components/ui/card/StatCard";

import WelcomeBanner from "../components/WelcomeBanner";
import AnalyticsChart from "../components/AnalyticsChart";
import ActivityTimeline from "../components/ActivityTimeline";
import ProductivityRing from "../components/ProductivityRing";

export default function DashboardPage() {
  return (
    <Container>
      <div className="space-y-8">
        <WelcomeBanner />

        <section
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
        >
          <StatCard title="Total Tasks" value="24" />

          <StatCard title="Completed" value="18" />

          <StatCard title="Pending" value="6" />

          <StatCard title="Productivity" value="82%" />
        </section>

        <section
          className="
          grid
          grid-cols-1
         lg:grid-cols-3
          gap-6
         min-w-0
        "
        >
          <div className="lg:col-span-2 min-w-0   overflow-hidden
">
            <AnalyticsChart />
          </div>

          <ProductivityRing />
        </section>

        <ActivityTimeline />
      </div>
    </Container>
  );
}
