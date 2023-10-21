"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FormEvent, useState, CompositionEvent, KeyboardEvent } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const handleOnInput = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value
      .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248))
      .replace(/\D/g, "");
  };
  const handleOnConposition = (e: CompositionEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value
      .replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248))
      .replace(/\D/g, "");
  };
  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key === "Process" || e.keyCode === 229) {
      return;
    } else {
      e.currentTarget.value = e.currentTarget.value
        .replace(/[０-９]/g, (s) =>
          String.fromCharCode(s.charCodeAt(0) - 65248)
        )
        .replace(/\D/g, "");
    }
  };
  return (
    <main className={styles.main}>
      <p>
        <code>compositionend</code> イベント
      </p>
      <input
        className={styles.input}
        type="text"
        defaultValue={value}
        // onInput={handleOnInput}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={handleOnKeyDown}
        onCompositionEnd={handleOnConposition}
      />
    </main>
  );
}
