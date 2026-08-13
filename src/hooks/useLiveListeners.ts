import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/** Real-time count of people currently viewing the site (Realtime presence). */
export function useLiveListeners() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const id =
      globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

    const channel = supabase.channel("radio-presence", {
      config: { presence: { key: id } },
    });

    channel
      .on("presence", { event: "sync" }, () => {
        setCount(Object.keys(channel.presenceState()).length || 1);
      })
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          void channel.track({ at: Date.now() });
        }
      });

    return () => {
      void supabase.removeChannel(channel);
    };
  }, []);

  return count;
}
