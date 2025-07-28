import React from 'react';
import clsx from 'clsx';
import styles from './style.module.css';

interface TitleProps {
  className?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
}

export default function SectionTitle(props: TitleProps) {
  return (
    <div className="text-center">
      <div className="col-12">
        <div className="mb-5 pt-6">
          <h1 className="article-title text-lg lg:text-3xl font-semibold">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
