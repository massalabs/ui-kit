import { Card } from './Card';

export default { title: 'Components/Card' };

export const _Card = {
  render: () => (
    <>
      <div className="flex flex-col gap-2">
        <Card>
          <div>I am a card component</div>
        </Card>
        <Card
          bgColor={'bg-blue-800'}
          enableBorder={true}
          customClass="rounded-2xl border-pink-300 w-96 h-96 flex flex-col justify-center items-center"
        >
          <div>I am a custom card component</div>
        </Card>

        <Card enableBorder={true}>
          <div>I am a card component with a border</div>
        </Card>
      </div>
    </>
  ),
};
