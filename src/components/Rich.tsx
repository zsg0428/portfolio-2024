// Inline emphasis for content strings: **key phrase** reads in full ink, {{metric}} in the signal
// color. Kept tiny on purpose; the content file stays plain text with two markers.
const pattern = /(\*\*[^*]+\*\*|\{\{[^}]+\}\})/g;

export function Rich({ text }: { text: string }) {
  return text.split(pattern).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("{{") && part.endsWith("}}")) {
      return (
        <span key={i} className="font-semibold whitespace-nowrap text-signal tabular-nums">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}
