import React from 'react';
import Giscus from '@giscus/react';

export default function GiscusComponent() {
  return (
    <Giscus
      repo="dinhhchSW/my-blog"
      repoId="R_kgDOOyH_mA"
      category="General"
      categoryId="DIC_kwDOOyH_mM4Cqsfl"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
    />
  );
}
