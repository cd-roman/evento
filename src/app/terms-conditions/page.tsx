import H1 from "@/components/H1";

export default function TermsAndConditions() {
  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-20 text-center">Terms and Conditions</H1>

      <SectionContent>
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit
        amet mattis vulputate enim nulla aliquet porttitor lacus. Facilisi cras
        fermentum odio eu feugiat. Nec ultrices dui sapien eget mi proin sed
        libero enim. Tristique senectus et netus et malesuada fames ac turpis.
        Lectus mauris ultrices eros in cursus turpis massa tincidunt dui.
        Scelerisque purus semper eget duis at tellus. Curabitur gravida arcu ac
        tortor dignissim convallis aenean et tortor. Ridiculus mus mauris vitae
        ultricies leo. At imperdiet dui accumsan sit amet nulla. Nunc aliquet
        bibendum enim facilisis gravida neque convallis. In massa tempor nec
        feugiat nisl pretium. At erat pellentesque adipiscing commodo elit. Cras
        ornare arcu dui vivamus arcu felis. Sit amet aliquam id diam maecenas
        ultricies mi eget. Felis donec et odio pellentesque diam volutpat
        commodo sed egestas. Cursus eget nunc scelerisque viverra. Mi sit amet
        mauris commodo quis imperdiet.
      </SectionContent>
      <SectionContent>
        2. A erat nam at lectus urna duis convallis convallis. Et malesuada
        fames ac turpis egestas sed tempus urna et. Eu non diam phasellus
        vestibulum lorem sed risus ultricies. Dictum at tempor commodo
        ullamcorper a lacus vestibulum sed. Sed felis eget velit aliquet
        sagittis id consectetur purus. Id venenatis a condimentum vitae sapien
        pellentesque habitant morbi tristique. Turpis tincidunt id aliquet risus
        feugiat in ante metus dictum. Condimentum mattis pellentesque id nibh
        tortor id. Odio ut sem nulla pharetra diam. Sit amet venenatis urna
        cursus eget nunc. Pellentesque elit eget gravida cum sociis natoque
        penatibus et magnis. Viverra mauris in aliquam sem. Dictumst vestibulum
        rhoncus est pellentesque. Vivamus arcu felis bibendum ut tristique et
        egestas quis ipsum.
      </SectionContent>
      <SectionContent>
        3. Eget arcu dictum varius duis at consectetur. Amet mattis vulputate
        enim nulla. Tristique risus nec feugiat in fermentum. Turpis cursus in
        hac habitasse platea dictumst. Nunc sed id semper risus. Egestas integer
        eget aliquet nibh praesent tristique magna sit. Donec ac odio tempor
        orci dapibus ultrices in iaculis nunc. Metus dictum at tempor commodo
        ullamcorper. Cursus eget nunc scelerisque viverra mauris in aliquam sem
        fringilla. Arcu odio ut sem nulla. Magna etiam tempor orci eu lobortis
        elementum nibh. Sed libero enim sed faucibus turpis in. Vivamus arcu
        felis bibendum ut tristique et egestas quis ipsum. Aliquet lectus proin
        nibh nisl condimentum id. Diam quis enim lobortis scelerisque fermentum.
        Curabitur gravida arcu ac tortor dignissim convallis aenean.
      </SectionContent>
      <SectionContent>
        4. Ac auctor augue mauris augue neque gravida in fermentum. Id eu nisl
        nunc mi. Posuere ac ut consequat semper viverra nam libero. Eget duis at
        tellus at urna. Egestas diam in arcu cursus euismod quis viverra nibh
        cras. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam
        eget felis eget nunc lobortis mattis. Tristique risus nec feugiat in
        fermentum posuere urna nec. Arcu non sodales neque sodales ut. Eget arcu
        dictum varius duis. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames. Sed velit dignissim sodales ut eu sem integer
        vitae justo. Posuere morbi leo urna molestie. Ullamcorper dignissim cras
        tincidunt lobortis feugiat vivamus at. Sem et tortor consequat id porta
        nibh. Urna id volutpat lacus laoreet non curabitur. Sit amet aliquam id
        diam maecenas ultricies. Ultrices gravida dictum fusce ut placerat.
        Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.
        Tellus orci ac auctor augue mauris augue neque gravida.
      </SectionContent>
      <SectionContent>
        5. Vestibulum lectus mauris ultrices eros in cursus. Quam quisque id
        diam vel quam elementum pulvinar etiam non. Aliquet eget sit amet tellus
        cras adipiscing. Molestie at elementum eu facilisis. Turpis massa
        tincidunt dui ut ornare lectus sit amet est. Ipsum dolor sit amet
        consectetur adipiscing elit. Mauris rhoncus aenean vel elit. Rutrum
        tellus pellentesque eu tincidunt tortor. Egestas dui id ornare arcu.
        Cras fermentum odio eu feugiat pretium nibh ipsum. Turpis egestas sed
        tempus urna et pharetra pharetra massa massa. Fringilla ut morbi
        tincidunt augue interdum velit. Purus gravida quis blandit turpis cursus
        in hac habitasse platea. Massa ultricies mi quis hendrerit dolor. Tellus
        cras adipiscing enim eu turpis egestas pretium. Proin nibh nisl
        condimentum id. Adipiscing vitae proin sagittis nisl rhoncus mattis
        rhoncus urna. Quisque non tellus orci ac auctor.
      </SectionContent>
    </main>
  );
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return <p className="max-w-[1100px] leading-6 mb-6">{children}</p>;
}
