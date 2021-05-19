import { shallowMount } from "@vue/test-utils";
import AlbumItem from "@/components/AlbumItem";

describe("AlbumItem.vue", () => {
  let album = null;
  let wrapper = null;

  beforeEach(() => {
    album = {
      album: "Agaetis Byrjun",
      artist: "Sigur RÃ³s",
      currentlyShowing: false,
      description:
        "The distinctive 'Alien Angel Foetus' design was created, remarkably, by Bernhoft using a Bic ballpoint pen but, using just this simple tool, he created the perfect visual representation of Sigur Ros' unique sound: otherworldly, eerily beautiful, and delicate.",
      designer: "Gotti Bernhoft",
      id: "3899132b-ca5a-4cc8-91f5-3c035a7511e5",
      imageUrl: "https://software.thinkrite.com/apptest/agaetis-byrjun.jpeg",
      image_url: "https://software.thinkrite.com/apptest/agaetis-byrjun.jpeg",
      isFavorite: false,
    };

    wrapper = shallowMount(AlbumItem, {
      props: { album },
    });
  });

  it("correctly renders the album name and artist name", () => {
    expect(wrapper.text()).toMatch(`${album.artist}${album.album}`);
  });

  it("initialalizes the component with the correct props", () => {
    const componentProps = wrapper.props();

    expect(componentProps.album).toEqual(album);
  });
});
