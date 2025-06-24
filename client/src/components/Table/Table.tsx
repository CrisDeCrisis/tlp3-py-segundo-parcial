import { useMetrics } from "./hooks/useMetrics";
import { MetricsInfo } from "./components/MetricsInfo";
import { MetricsResults } from "./components/MetricsResults";

const MetricsTable: React.FC = () => {
    const { metricsData, isLoading, error, fetchMetrics } = useMetrics();

    if (!metricsData && !error) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="w-full max-w-2xl">
                    <MetricsInfo
                        onLoadMetrics={fetchMetrics}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <MetricsResults
                metricsData={metricsData}
                error={error}
                isLoading={isLoading}
            />
        </div>
    );
};

export default MetricsTable;