export function buildIconProps(props: IconProps): Required<IconProps> {
  return {
    class: props.class ?? ''
  }
} 
