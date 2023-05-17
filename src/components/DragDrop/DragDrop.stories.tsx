import { DragDrop } from "./DragDrop";

export default { title: "Components/DragDrop", component: DragDrop };

export const _LoadFile = {
  render: () => (
    <>
      <DragDrop placeholder="something to inform" />
    </>
  ),
};

export const _Loaded = {
  render: () => (
    <>
      <DragDrop placeholder="file loaded" loaded={true} />
    </>
  ),
};
